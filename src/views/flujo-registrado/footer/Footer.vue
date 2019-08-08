<template>
    <div class="contenedor-footer" :class="{'footer-index' : footer}">
        <div class="titulo-tg">
            <img class="logo-tg my-3 ml-3" src="img/mobile/logotgmobile.svg">
            <div class="idioma-container mr-3 d-flex align-items-center mr-2">
                <div class="idioma-text ml-5 mr-2">{{translateStore.idioma}}</div>
                <select class="form-control" @change="changeLang($event)">
                    <option value="es"><div class="idioma mx-2" selected>{{translateStore.idiomaOpcionesEsp}}</div></option>
                    <option value="en"><div class="idioma mx-2">{{translateStore.idiomaOpcionesEng}}</div></option>
                    <option value="fr"><div class="idioma mx-2">{{translateStore.idiomaOpcionesFr}}</div></option>
                </select>
            </div>
        </div>
        <div class="redes-sociales my-4">
            <div class="icono-red mx-3">
                <i class="fab fa-facebook-f"></i>
            </div>
            <div class="icono-red mx-3">
                <i class="fab fa-instagram"></i>    
            </div>
            <div class="icono-red mx-3">
                <i class="fab fa-youtube "></i>
            </div>
            <div class="icono-red mx-3">
                <i class="fab fa-discord "></i>
            </div>
            <div class="icono-red mx-3">
                <i class="fab fa-twitch "></i>
            </div>
            <div class="icono-red mx-3">
                <i class="far fa-envelope "></i>
            </div>
        </div>
        
        <div class="copyright mb-5 text-center">
            <div class="copy-titulo"><span>{{translateStore.copyright}}</span> {{translateStore.terminosCondiciones}}</div>
            <div class="copy-text text-secondary mt-3 mx-5">{{translateStore.copyText}}</div>
        </div>
    </div>
</template>

<script>
import traducciones from './../../../translate/translate.js'

export default {
    name: 'Footer',
    data() {
        return {
            translate: traducciones,
            footer: false
        }
    },
    methods: {
       changeLang(event) {
         this.$store.dispatch('changeLanguage', {language: event.target.value, translate: this.translate});
       },
    },
    mounted() {
        if (this.$route.path === '/') {
            this.footer = true
        } else {
            this.footer = false
        }
    },
    computed: {
      translateStore() {
         return this.$store.state.translate.footer;
      }
    },
}
</script>


<style lang="scss" scoped>
@import './../../../../sass/app';

.contenedor-footer {
    background-color: $brand-six;
}

.footer-index {
    height: 85vh;
    overflow: hidden;
}

.titulo-tg {
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    .logo-tg {
        width: 10em;
    }
    .idioma-container {
        display: flex;
        font-size: 1.2em;
    }
    .idioma {
        color: $brand-orange;
    }
    .fa-sort-down {
        color: $brand-orange;
    }
}

.redes-sociales {
    display: flex;
    justify-content: center;
    .icono-red {
        width: 3em;
        height: 3em;
        background: $brand-orange;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    svg {
        color: white;
        font-size: 1.8em;
    }
}

.copy-titulo {
    font-size: 1.2em;
    color: $brand-orange;
    span {
        color: white;
    }
}

.copy-text {
    font-size: 1.3em;
    text-align: left;
}

.idioma-text {
    font-size: 1.1em;
}

select.form-control,
select.form-control:focus,
select.form-control option  {
    background: transparent;
    color: $brand-orange;
    font-size: 1.1em;
}




</style>
