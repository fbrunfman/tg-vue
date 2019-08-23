<template>
    <div class="contenedor-registro-mail">
        <Header></Header>
        <div class="register d-flex align-items-center my-5 ml-4">
            <router-link  to="/register">
                <div class="icon-back d-flex align-items-center justify-content-center mr-3"><i class="fas fa-chevron-left"></i></div>
            </router-link>
            <span>{{ translateStore.tituloSecundario }}</span>
        </div>
        <form  @submit.prevent ref="formulario"  autocomplete="off">
            <div class="formulario">

                <div class="contenedor-errores" v-if="errors.length">
                    <div class="errores" v-for="(error, i) in errors" :key="'error' + i">
                        <div class="error my-2"><span class="col-11">{{error}}</span></div>
                    </div>
                </div>
                <div class="contenedor-input my-3">
                    <div class="nombre-usuario">
                        <span class="col-11">{{translateStore.nombre}}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <input  autocomplete="off" v-model="name" type="text" name="name" class="form-control col-11 my-3" :placeholder="translateStore.placeholderNombre">
                    </div>
                </div>
                <div class="contenedor-input my-3">
                    <div class="nombre-usuario">
                        <span class="col-11">{{translateStore.email}}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <input type="text" v-model="email" name="email" class="form-control col-11 my-3" :placeholder="translateStore.placeholderEmail">
                    </div>
                </div>
                <div class="contenedor-input my-3">f
                    <div class="nombre-usuario">
                        <span class="col-11">{{translateStore.password}}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <input type="password" name="password" v-model="password" class="form-control col-11 my-3" :placeholder="translateStore.placeholderPassword">
                    </div>
                </div>
                <div class="contenedor-input my-3" v-if="esReferido">
                    <div class="nombre-usuario">
                        <span class="col-11">{{translateStore.referido}}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <input type="text" name="referred" v-model="referred" class="form-control col-11 my-3" :placeholder="translateStore.placeholderReferido">
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="boton-finalizar d-flex justify-content-center align-items-center my-3 col-11" @click="login">
                        <span class="" v-if="!loding">{{translateStore.finalizar}}</span>
                        <div class="spinner-border" role="status" v-if="loding">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center" @click="showReferred">
                    <div class="body-footer">
                        <span>{{translateStore.referido}}</span>
                    </div>
                </div>
            </div>
        </form>
       
    </div>
</template>

<script>
import Header from './../header/Header.vue'
import RegisterService from './../../../services/register.services.js';
export default {
    name: 'MailRegister',
    components: {
        Header
    },
    data() {
        return {
            name: null,
            email: null,
            password: null,
            referred: null,
            esReferido: false,
            errors: [],
            loding: false
        }
    },

    methods: {
        login() {
            this.validateLogin()
            if (this.errors != null && this.errors.length < 1) {
                 this.loding = true
                var datos = this.getDataForm();
                RegisterService.registerUser(datos)
                    .then((response) => {
                        this.loding = false
                        this.$store.commit('emailForm', datos)
                        this.$router.push('/confirm')
                    })
                    .catch((error) => {
                        var errors = Object.assign({}, error.response.data.errors);
                        console.log('error', errors);
                        this.$swal({
                            type: 'error',
                            title: 'Oooops...',
                            text: errors.email,
                            timer: 2000
                        })
                    });
                    this.loding = false
            }
        }, 
        getDataForm() {
            var datos = {
               name: this.name,
               email: this.email,
               password: this.password,
               referred: this.referred,
               nickname: null,
               gameMobileId: null,
               gameSelected: null,
               skipGame: this.$store.state.skipGame
            };
            if(this.$store.state.nickname) {
               datos.nickname = this.$store.state.nickname;
            }

            if(this.$store.state.gameMobileId) {
               datos.gameMobileId = this.$store.state.gameMobileId;
            }

            if(this.$store.state.gameSelected) {
               datos.gameSelected = this.$store.state.gameSelected;
            }

            return datos;
        },
        showReferred() {
            this.esReferido = true;
        },
        validateLogin() {
            this.errors = []
            if (!this.name) {
                this.errors.push('El nombre es requerido')
            }
            if (this.name != null && this.name.length > 254 ) {
                this.errors.push('El nombre es debe tener menos de 254 caracteres')
            }
            if (!this.email) {
                this.errors.push('El mail es requerido')
            }
            if (this.email != null && this.email.length > 254 ) {
                this.errors.push('El mail es debe tener menos de 254 caracteres')
            }
            if (!this.validateEmail(this.email)) {
                this.errors.push('El mail tiene que cumplir con su formato')
            }
            if (!this.password) {
                this.errors.push('La contraseña es requerida')
            }
            if (this.password != null && this.password.length > 10 || this.password.length < 6 ) {
                this.errors.push('La contraseña debe tener entre 6 y 10 caracteres')
            }
            setTimeout(() => {
                this.errors = [];
            }, 6000);
        },
         validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    },
   computed: {
      translateStore() {
         return this.$store.state.translate.registroMail;
      }
   },
}
</script>



<style lang="scss" scoped>
@import './../../../../sass/app';

.contenedor-registro-mail {
    background: $brand-five;
    min-height: 100vh;
    position: relative;
}

.register {
    span {
    color: #ff6600;
    font-size: 1.5em;
    font-weight: 900;
    text-transform: uppercase;
    }
}

.icon-back {
    background-color: $brand-orange;
    width: 25px;
    height: 22px;
    svg {
        color: white;
    }
}

.nombre-usuario {
    span {
        font-size: 1.1em;
        color: $brand-third;
    }
}

input.form-control {
    height: 35px;
    background: white !important;
    color: black !important;
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

.body-footer {
    position: absolute;
    bottom: -20px;
    span {
        color: $brand-orange;
        font-size: 1.1em;
    }
}

.error {
    background-color: red;
    height: 2em;
    color: white;
    font-size: 1.2em;
    padding: 5px;
}

</style>

