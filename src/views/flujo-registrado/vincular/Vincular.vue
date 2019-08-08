<template>
    <div class="contenedor-vincular">
        <div class="titulo" :class="{'titulo-freefire' : freeFire, 'titulo-pubg' : pubg, 'titulo-pubg2' : pubg2, 'titulo-counter' : counter, 'titulo-fifa' : fifa}">
        </div>
        <div :class="{'body-vincular' : freeFire }">
            <div class="register d-flex align-items-center my-5 ml-4">
               <router-link  to="/">
                  <div class="icon-back d-flex align-items-center justify-content-center mr-3">
                     <i class="fas fa-chevron-left"></i>
                  </div>
               </router-link>
                <span>{{translateStore.tituloSecundario}}</span>
            </div>
            <div class="subtitle-vincular text-white col-11">
                <span>{{translateStore.completa}}</span>
            </div>
            <div class="formulario" v-if="freeFire || pubg || fifa">
                <div class="contenedor-input my-3">
                    <div class="nombre-usuario">
                        <span class="col-11">{{translateStore.nickname}}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <input type="text" class="form-control col-11 my-3" v-model="nickname">
                    </div>
                </div>
                <div class="contenedor-input my-3" v-if="freeFire || pubg">
                    <div class="nombre-usuario d-flex align-items-center col-11">
                        <span class="mr-2">{{translateStore.id}}</span>
                        <div class="d-flex justify-content-center align-items-center pregunta"><div class="text-white signo-pregunta" v-popover:freefireid>?</div></div>
                    </div>
                    <popover name="freefireid">
                        <img src="/img/mobile/freefireid.jpg" alt="" srcset="">
                    </popover>
                    <div class="d-flex justify-content-center">
                        <input type="text" class="form-control col-11 my-3" v-model="game_mobile_id">
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="boton-finalizar d-flex justify-content-center align-items-center my-3 col-11" @click="validNickname()">
                        <span class="" v-if="!loding">{{translateStore.continuar}}</span>
                         <div class="spinner-border" role="status" v-if="loding">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="conect-steam d-flex justify-content-center my-5" v-if="counter || pubg2">
                <img class="" src="/img/mobile/boton-steam.png" alt="" srcset="">
            </div>
            <div class="d-flex justify-content-center">
                <div class="body-footer my-5">
                    <span>{{translateStore.vincular}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import traducciones from './../../../translate/translate.js'
import GameService from './../../../services/game.services.js';

export default {
    name: 'Vincular',
    data() {
        return {
            freeFire: false,
            pubg: false,
            fifa: false,
            pubg2: false,
            counter: false,
            traducciones: this.$store.state.translate.vincular,
            game: {},
            nickname: '',
            game_mobile_id: '',
            loding: false
        }
    },
    methods: { 
      gameSelected() {
         this.game = this.$store.state.gameSelected;
         if(this.game.game) {
            switch (this.game.game) {
               case 'Free Fire':
                  this.freeFire = true;
               break;
   
               case 'Pubg Mobile':
                  this.pubg = true;
               break;
   
               case 'Fifa':
                  this.fifa = true;
               break;
   
               case 'Pubg':
                  this.pubg2 = true;
               break;
   
               case 'Counter Strike GO':
                  this.counter = true;
               break;
            }
         } else {
            this.$router.push({path: '/'});
         }
      },
      setNickname() {
         this.nickname = this.$store.state.nickname;
         this.game_mobile_id = this.$store.state.gameMobileId;
      },
      validNickname() {
        this.loding = true
         var validForm = this.checkForm();
         
         if (!validForm) {
            this.$swal({
                type: 'error',
                title: 'Oooops...',
                text: 'You must complet the form'
            })
            this.loding = false
         } else {
            var data = this.createdRequestData();
            GameService.validGameNickname(data)
            .then((response) => {
                this.loding = false
               if(response.data.data == 0) {
                  this.$store.commit('nickname', this.nickname);
                  this.$store.commit('gameMobileId', this.game_mobile_id);
                  this.$router.push({path: '/register'});
                  this.loding = false
               } else {
                   this.$swal({
                    type: 'error',
                    title: 'Oooops...',
                    text: 'Nickname or game ID already exists'
                     })
                  this.loding = false
               }
            })
            .catch((response)  => {
                this.loding = false
                console.log(error.response)
            });
         }
      },
      checkForm() {
         if (this.game_mobile_id && this.nickname) {
            return true;
         }
            return false;         
      },
      createdRequestData() {
         return {
            'game_mobile_id':  this.game_mobile_id,
            'nickname': this.nickname,
            'game_id': this.game.game_id,
         };
      },
      setTranslate() {
         var listTranslate = this.traducciones;
         this.$store.commit('addObjTranslate', listTranslate);
      },
    },
   computed: {
      translateStore() {
         return this.$store.state.translate.vincular;
      }
   },
   mounted() {
      this.gameSelected();
      this.setNickname();
   }
}
</script>
<style lang="scss" scoped>
@import './../../../../sass/app';

.contenedor-vincular {
    min-height: 100vh;
    position: relative;
    background-color: $brand-five;
}

.register {
    span {
    color: #ff6600;
    font-size: 1.5em;
    font-weight: 900;
    text-transform: uppercase;
    z-index: 2;
    }
}

.icon-back {
    background-color: $brand-orange;
    width: 25px;
    z-index: 2;
    height: 22px;
    svg {
        color: white;
    }
}

a {
   z-index: 10;
}

input.form-control {
    height: 35px;
    z-index: 2;
}

.boton-finalizar {
    background-color: $brand-orange;
    height: 35px;
    z-index: 2;
    span {
        color: white;
        text-transform: uppercase;
        font-weight: 900;
    }
}

.nombre-usuario {
    span {
        font-size: 1.1em;
        color: $brand-third;
        z-index: 2;
    }
}

.body-footer {
    position: absolute;
    bottom: 0;
    z-index: 2;
    span {
        color: $brand-orange;
        font-size: 1.1em;
        z-index: 2;
    }
}

.titulo {
    padding: 4em;
    background-repeat: no-repeat;
    background-size: cover;
}

.titulo-freefire {
    background-image: url('/img/mobile/freefiremobile.jpg');
}
.titulo-pubg {
    background-image: url('/img/mobile/pubgmobile.jpg');
}
.titulo-pubg2 {
    background-image: url('/img/mobile/pubgmobile2.jpg');
}
.titulo-counter {
    background-image: url('/img/mobile/csmobile.jpg');
}
.titulo-fifa {
    background-image: url('/img/mobile/fifamobile.jpg');
}

.body-vincular {
    position: relative;
    min-height: 80vh;
}

.body-vincular:after {
    content : "";
    display: block;
    position: absolute;
    top: -15em;
    left: 0;
    background-image: url('/img/mobile/single_freefire.jpg');
    width: 100%;
    height: 100%;
     background-repeat: no-repeat;
    background-size: cover;
    opacity : 0.4;
    z-index: 1;
}

.pregunta {
    background: $brand-orange;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    z-index: 2;
}

.text-white.signo-pregunta {
    margin-right: 1px;
}

span {
    font-size: 1.2em;
}
//     background-image: url('/img/mobile/single_freefire.jpg');

.vue-popover.dropdown-position-bottom {
    width: 180px;
    left: 57.4688px;
    top: 182.5px !important;
}

img {
    width: 100%;
}

</style>