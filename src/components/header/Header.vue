<template>
    <div class="contenedor-header">
         <router-link  to="/mobile-v2" class="d-flex flex-column align-items-center">
            <img src="/img/mobile/logotgmobile.svg" alt="Logo TG">
            <h3 v-if="showSub">{{traducciones.tituloSecundario}}</h3>
         </router-link>
    </div>
</template>

<script>
import traducciones from './../../translate/translate.js'

export default {
    name: 'Header',
    data() {
        return {
            traducciones: this.$store.state.translate.header,
            showSub: true
        }
    },
    mounted() {
        if (this.$route.path === '/') {
            this.showSub = true
        } else {
            this.showSub = false
        }
    },
}
</script>


<style lang="scss" scoped>
@import './../../sass/app';

.contenedor-header {
    background-image: url('/img/mobile/backgroundtitle1.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    background-repeat: no-repeat;
    background-size: cover;
    h3 {
        margin-top: .8em;
        color: $brand-orange;
    }
}

</style>