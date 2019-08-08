<template>
    <div class="contenedor-confirm">
        <div class="confirm-icono">
            <div class="titulo-contenedor d-flex flex-column align-items-center">
                <img src="/img/mobile/logo-tg.svg" class="mt-5" alt="" srcset="">
                <div class="bienvenido d-flex flex-column align-items-center col-8">
                    <span class="h4"><strong>{{translateStore.tituloSecundario}}</strong></span>
                    <span class="h1"><strong>{{translateStore.tg}}</strong></span>
                    <span class="mt-3 h3 text-center"><strong>{{translateStore.confirm}}</strong></span>
                </div>
            </div>
        </div>
        <div class="envio-texto d-flex justify-content-center my-5">
            <div class="col-11 text-white bold text-confirm my-4">{{translateStore.verifica}}</div>
        </div>
        <div class="botones my-4 ml-5">
            <div class="d-flex">
                <div class="inicio p-4 mr-2" @click="goHome">
                    <span>{{translateStore.inicio}}</span>
                </div>
                <div class="reenviar p-4" @click="reSendEmail">
                    <span>{{translateStore.reenviar}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegisterService from './../../../services/register.services.js';
export default {
    name: 'Confirm',
    data() {
        return {
        }
    },
    methods: {
        goHome() {
            this.$store.commit('nickname', '');
            this.$store.commit('gameMobileId', '');
            this.$store.commit('emailForm', '');
            this.$router.push('/')
        },
        reSendEmail() {
            var email = { 
                email : this.$store.state.emailForm.email
            }
            RegisterService.resendEmail(email)
                .then((response) => {
                    alert('El mail ha sido reenviado')
                })
                .catch((error) => {
                    console.log(error.data)
                });
        }
    },
    computed: {
      translateStore() {
         return this.$store.state.translate.confirm;
      }
    },
}
</script>

<style lang="scss" scoped>
@import './../../../../sass/app';

.contenedor-confirm {
    position: relative;
    min-height: 100vh;
    background: #0a2558;
    
}

.h3, .h1 {
    margin-top: 0 !important;
}

.h1 {
    font-size: 3em;
}

.h4 {
    font-size: 2em;
}


.confirm-icono {
    background-image: url('/img/mobile/Registro-SVA.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 43vh;
}

.titulo-contenedor {
    padding-top: 90px;
    color: white;
    font-family: $font-third;
}

.text-confirm {
    font-size: 1.4em;
}

.inicio, .reenviar {
    background-color: $brand-orange;
    span {
        font-size: 1.2em;
        color: white;
        font-weight: 900;
    }
}

</style>