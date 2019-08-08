<template>
   <div class="contenedor-login">
       <Header></Header>
       <div class="login-titulo">
           <h1 class="col-11">{{traducciones[0].translateList.titulo}}</h1>
       </div>
       <div class="login-subtitle col-11">
           <span>{{traducciones[0].translateList.subtitlo}}</span>
       </div>
       <div class="login-facebook">
           <div class="contenedor-input my-3">
               <div class="nombre-usuario">
                   <span class="col-11">{{traducciones[0].translateList.nombre}}</span>
               </div>
               <div class="d-flex justify-content-center">
                   <input type="text" v-model="name" class="form-control col-11 my-3" :placeholder="traducciones[0].translateList.placeholder_nombre" required>
               </div>
           </div>
           <div class="contenedor-input my-3">
               <div class="nombre-usuario">
                   <span class="col-11">{{traducciones[0].translateList.mail}}</span>
               </div>
               <div class="d-flex justify-content-center">
                   <input type="text" v-model="mail" class="form-control col-11 my-3" required>
               </div>
           </div>
            <div class="d-flex justify-content-center" @click="goConfirmation">
               <div class="boton-finalizar d-flex justify-content-center align-items-center my-3 col-11">
                   <span class="">{{traducciones[0].translateList.confirm}}</span>
               </div>
           </div>
       </div>
   </div>
</template>
<script>
import traducciones from './traducciones.js'
import Header from './../header/Header.vue'
import RegisterService from './../../../services/register.services.js';
export default {
   name: 'Verificacion',
   components: {
       Header
   },
   data() {
       return {
           traducciones: traducciones,
           name: this.$store.state.nickname, // estos datos hay que cambiarlos por los de Facebook
           mail: this.$store.state.gameMobileId // estos datos hay que cambiarlos por los de Facebook
       }
   },
    methods: {
        goConfirmation() {
            var datos = {
                name: this.name,
                mail: this.mail
            }
            RegisterService.registerUser(datos)
                .then((response) => {
                    this.$store.commit('emailForm', datos)
                    this.$router.push('/confirm')
                })
                .catch((error) => {
                    console.log(error.data)
                });
       }
   }
}
</script>
<style lang="scss" scoped>
@import './../../../../sass/app';
h1 {
   color: $brand-orange;
   font-size: 2.3em;
   font-weight: 900;
}
.login-subtitle {
   span {
       font-size: 1.3em;
       color: white;
   }
}
.contenedor-login {
   background: $brand-five;
   min-height: 100vh;
   position: relative;
}
.nombre-usuario {
   span {
       font-size: 1.1em;
       color: $brand-third;
   }
}
input.form-control {
   height: 35px;
}
.boton-finalizar {
   background-color: $brand-orange;
   height: 35px;
   span {
       color: white;
       text-transform: uppercase;
       font-weight: 900;
   }
}
</style>