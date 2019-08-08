<template>
    <div class="contenedor-loginV2">
        <Header></Header>
        <div class="body-loginV2">
            <div class="register d-flex align-items-center my-5 ml-4">
               <router-link  to="/link">
                  <div class="icon-back d-flex align-items-center justify-content-center mr-3">
                     <i class="fas fa-chevron-left"></i>
                  </div>
               </router-link>

                <span>{{translateStore.tituloSecundario}}</span>
            </div>
            <div class="contenedor-boxes d-flex justify-content-center my-5">
                <div class="box-login">
                    <div class="box d-flex align-items-center justify-content-center" @click="goEmailRegister">
                        <i class="far fa-envelope"></i>
                        <span class="text-white">{{translateStore.email}}</span>
                    </div>
                    <div class="box d-flex align-items-center justify-content-center" @click="goFbRegister">
                        <i class="fab fa-facebook-f"></i>
                        <span class="text-white">{{translateStore.facebook}}</span>
                    </div>
                </div>
            </div>
            <div class="contenedor-footer d-flex justify-content-center">
                <div class="ingresar">
                    <span>{{translateStore.ingresar }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './../header/Header.vue'
export default {
    name: 'LoginV2',
    components: {
        Header
    },
    data() {
        return {
        }
    },
    methods: {
        goEmailRegister() {
            this.$router.push('/mail-register');
        },
        goFbRegister() {
           console.log('a');
            this.$router.push('/FbRegister');
        }
    },
   computed: {
      translateStore() {
         return this.$store.state.translate.loginV2;
      }
   },
}
</script>

<style lang="scss" scoped>
@import './../../../../sass/app';

.contenedor-loginV2 {
    background: $brand-five;
    min-height: 100vh;
    position: relative;
}

.icon-back {
    background-color: $brand-orange;
    width: 25px;
    height: 22px;
    svg {
        color: white;
    }
}

a {
   z-index: 10;
}

span {
    color: #ff6600;
    font-size: 1.6em;
    font-weight: 900;
    text-transform: uppercase;
}

.box {
    flex-direction: column;
    border: 1px solid $brand-orange;
    flex: 1 0 auto;
    height: auto;
    svg {
        font-size: 2.5em;
        color: $brand-orange;
    }
}

.box-login {
    display: grid;
    grid-template-columns: 40vw 40vw;
    grid-gap: 10px;
    grid-template-rows: 20vh;
}

.ingresar {
    position: absolute;
    bottom: 20px;
    span {
        font-size: 1.4em;    
    }

}

</style>


