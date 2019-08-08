<template>
    <div class="contenedor-header">
         <router-link class="d-flex flex-column align-items-center"  to="/">
            <img src="./../../../img/logotgmobile.svg" alt="Logo TG">
            <h3 v-if="showSub">{{translateStore.tituloSecundario}}</h3>
         </router-link>
    </div>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
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
    computed: {
      translateStore() {
         return this.$store.state.translate.header;
      }
    },
}
</script>


<style lang="scss" scoped>
@import './../../../../sass/app';

.contenedor-header {
    background-image: url('./../../../img/backgroundtitle1.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em;
    background-repeat: no-repeat;
    background-size: cover;
    h3 {
        margin-top: .8em;
        color: $brand-orange;
    }
}

</style>