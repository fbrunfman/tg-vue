<template>
    <div class="contenedor-index">
        <Header></Header>

        <div class="main-body">
            <!-- <a href="http://dev1.todosgamers.com/dashboard#/"><button class="btn btn-primary my-2">Ir a Dashboard</button></a> -->
            <div class="contenedor-juegos" v-for="game in gameList" v-bind:key="game.game_id">
                <div class="contenedor-juego mt-2" v-if="game.game_type == 'mobile'">
                     <img :src="game.game_image_mobile" @click="selectGame(game)" >
                     <Quickplay :quickplay="game.quickplays" v-if="game.quickplays.length"></Quickplay>
                </div>
                <div class="contenedor-juego" v-if="game.game_type == 'desktop'">
                  <div class="mt-2" v-if="showImage">
                     <div class="contenedor-juego d-grid">
                        <img :src="game.game_image_mobile" @click="selectGame(game)">
                        <Quickplay v-if="game.quickplays.length"></Quickplay>
                     </div>
                  </div>
                </div>
            </div>
            <div class="mas-juegos mt-2" @click="showMore()" v-if="desktop">
                <span>{{translateStore.masJuegos}}</span>
                 <i class="fas fa-sort-down"></i>
            </div>
            <div class="pregunta-register">
                <router-link to="/login">
                    <div class="registrarse">{{translateStore.already_register}}
                            <strong>{{translateStore.get_mobile}}</strong>
                    </div>
                </router-link>
                <div class="omitir" @click="skipGame()">{{translateStore.omitir}}</div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import traducciones from './../../translate/translate.js'
import GameService from './../../services/game.services.js';
import TranslateService from './../../services/translate.mobile.services.js';
import Header from './../../components/header/Header.vue';
import Footer from './../../components/footer/Footer.vue';
import Quickplay from './quickplay/Quickplay.vue';

export default {
    name: 'Registrado',
    data() {
        return {
            translate: traducciones,
            showImage: false,
            desktop: false,
        }
    },
    methods: {
        showMore() {
            this.showImage = !this.showImage
        },

        loadGames() {
            GameService.get()
               .then((response) => {
                  this.$store.commit('gameList', response.data.data);
               })
               .catch((error) => {
                  console.log(error.data);
               });
         },
         
         selectGame(gameSelected) {
            if(this.$store.state.gameSelected && (gameSelected.game_id != this.$store.state.gameSelected.game_id)) {
               this.$store.commit('nickname', '');
               this.$store.commit('gameMobileId', '');
            }
            this.$store.commit('gameSelected', gameSelected);
            this.$store.commit('skipGame', false);
            this.$router.push({path: '/link'});
         },

         gameSelected() {
            return this.$store.state.gameSelected;
         },

         verifyDesktopGame() {
            var gameList = this.$store.state.gameList;
            if(gameList.length > 0) {
               gameList.forEach( function (element) {  
                  if (element.game_type == 'desktop'){
                    this.desktop = true;
                    return false;
                  }
               });
            }
         },
         
         skipGame() {
            this.$store.commit('skipGame', true);
            this.$router.push({path: '/register'});
         }
    },
    computed: {
       gameList() {
           return this.$store.state.gameList;
       },
       translateStore() {
           return this.$store.state.translate.index;
       }
    },
    components: {
        Footer,
        Header,
        Quickplay
    },
   mounted() {
      this.loadGames();
      this.verifyDesktopGame();
   },
}
</script>

<style lang="scss" scoped>
@import './../../sass/app';

.contenedor-index {
    background-color: $brand-five;
    min-height: 100vh;
}

.imagen-dos {
    margin-top: .5em;
}

.mas-juegos {
    display: -webkit-box;
    color: $brand-orange;
    background-color: $brand-primary;
    align-items: center;
    height: 2.5em;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.4em;
    cursor: pointer;
    .fa-sort-down {
        font-size: 2em;
        margin-left: .5em;
    }
    span {
        margin-left: 1em;
    }
}

.pregunta-register {
    display: flex;
    min-height: 20vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2em 0;
    color: white;
    text-transform: uppercase;
    .registrarse {
        padding: 1em;
        border: 1px solid $brand-orange;
        border-radius: 20%;
        font-size: 1.3em;
    }
    strong {
        margin-left: .5em;
    }
    .omitir {
    color: $brand-orange;
    margin-top: 1em;
    text-transform: uppercase;
    font-weight: 900;
    }
}

.contenedor-juegos {
    img {
      width: 100%;
    }
}

.contenedor-juego {
    position: relative;
}



.arrow-right.text-center {
    background: $brand-orange;
    display: flex;
    justify-content: center;
    height: 20px;
    align-items: center;
}

a {
    color: inherit;
}

</style>
