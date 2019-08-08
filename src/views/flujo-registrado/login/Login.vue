<template>
    <div class="contenedor-login">
        <Header></Header>
       <div class="register d-flex align-items-center my-5 ml-4">
            <router-link  to="/">
                <div class="icon-back d-flex align-items-center justify-content-center mr-3">
                    <i class="fas fa-chevron-left"></i>
                </div>
            </router-link>
            <span>{{translateStore.titulo}}</span>
        </div>
       <div class="login-facebook">
           <div class="contenedor-input my-3">
               <div class="nombre-usuario">
                   <span class="col-11">{{translateStore.mail}}</span>
               </div>
               <div class="d-flex justify-content-center">
                   <input autocomplete="off" type="text" v-model="email" class="form-control col-11 my-3" required>
               </div>
           </div>
           <div class="contenedor-input my-3">
               <div class="nombre-usuario">
                   <span class="col-11">{{translateStore.password}}</span>
               </div>
               <div class="d-flex justify-content-center">
                   <input type="password"  autocomplete="off" v-model="password" class="form-control col-11 my-3" required>
               </div>
           </div>
            <div class="d-flex justify-content-center" @click="login">
               <div class="boton-finalizar d-flex justify-content-center align-items-center my-3 col-11">
                   <span class="" v-if="!loding">{{translateStore.confirm}}</span>
                   <div class="spinner-border" role="status" v-if="loding">
                        <span class="sr-only">Loading...</span>
                    </div>
               </div>
           </div>
            <div class="olvido d-flex justify-content-center">
                <span>{{translateStore.forget}}</span>
            </div>
            <div class="divisor d-flex justify-content-center align-items-center my-3">
                <div class="linea"></div>
                <div class="or mx-4">Or</div>
                <div class="linea"></div>
            </div>
            <div class="contenedor-facebook d-flex justify-content-center align-items-center mb-3">
                <div class="facebook d-flex justify-content-center align-items-center col-11 p-3">
                    <i class="fab fa-facebook-f mx-3"></i>
                     <a id="facebookBtn" :href="urlBase + '/auth/facebook?redirect=' + urlBase">
                        <span>{{translateStore.facebook}}</span>
                     </a>
                </div>
            </div>
            <vue-recaptcha
                ref="recaptcha"
                @verify="onCaptchaVerified"
                @expired="onCaptchaExpired"
                size="invisible"
                :sitekey="captcha">
            </vue-recaptcha>
       </div>
    </div>
</template>

<script>

import VueRecaptcha from 'vue-recaptcha';
import CaptchaService from './../../../services/captcha.services.js';
import Header from './../header/Header.vue'

export default {
    name: 'Login',
    components: {
    'vue-recaptcha': VueRecaptcha,
    Header
    },
    data() {
        return {
            email: '',
            password: '',
            passwordConfirmation: '',
            status: '',
            sucessfulServerResponse: '',
            serverError: '',
            captcha: process.env.MIX_CAPTCHA,
            urlBase: process.env.MIX_APP_URL,
            loding: false
        }
    },
    methods: {
        login() {
            this.$refs.recaptcha.execute();
            this.login = true
        },
        onCaptchaVerified(recaptchaToken) {
            const self = this;
            self.status = "submitting";
            self.$refs.recaptcha.reset();
            var datos = {
                email: self.email,
                password: self.password,
                recaptchaToken: recaptchaToken
            }
            CaptchaService.login(datos)
            .then((response) => {
                this.login = false
               self.sucessfulServerResponse = response.data.data;
               if(response.data.data.success) {
                  this.$router.push({path: '/dashboard'});
               }
            }).catch((err) => {
                self.serverError = getErrorMessage(err);
                this.login = false

                //helper to get a displayable message to the user
                function getErrorMessage(err) {
                let responseBody;
                responseBody = err.response;
                if (!responseBody) {
                    responseBody = err;
                }
                else {
                    responseBody = err.response.data || responseBody;
                }
                return responseBody.message || JSON.stringify(responseBody);
                }

            }).then(() => {
                self.status = "";
            });


        },
        onCaptchaExpired: function () {
            this.$refs.recaptcha.reset();
        }
    },
    computed: {
      translateStore() {
         return this.$store.state.translate.login;
      }
    },
    
}
</script>

<style lang="scss" scoped>
@import './../../../../sass/app';
h1 {
   color: $brand-orange;
   font-size: 2.3em;
   font-weight: 900;
}
a {
   color: inherit;
   &:hover {
      text-decoration: none;
      color: inherit;

   }
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
   backogrund-color: white !important;
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

.olvido {
    font-size: 1.2em;
    color: $brand-orange;
}

.linea {
    color: white;
    border: 0.1px solid #4c4c4c;
    height: 1px;
    width: 135px;
}

.or {
    font-size: 1.2em;
    color: white;
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

.facebook {
    background: #0e3a7b;
    color: white;
    font-size: 1.4em;
}

input:not([type=checkbox]):not([type=radio]).form-control, textarea.form-control, select.form-control {
    background: white !important;
    border-radius: 0;
    border: none;
    color: #000;
}
</style>