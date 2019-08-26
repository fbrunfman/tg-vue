<template>
  <div id="app">
    <div class="contenedor">
      <Navbar/>
      <div class="content">
      <router-view/>
      </div>
      <div class="footer">
        <Header></Header>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/header-dashboard/Header-Dashboard.vue'
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'
export default {
  name:'Home',
  components: {
    Header,
    Footer,
    Navbar
  },
  methods: {

  }
}

</script>
<style lang="scss">
@import './sass/app';
html {
  background: $brand-five;
  font-family: $font-primary;
}

body {
  margin: 0;
}

.contenedor {
  background-color: $brand-five;
  min-height: 100vh;
  position: relative;
}

.content {
  min-height: 80vh;
}

.footer {
  margin-left: 75px;
  position: absolute;
  top: 0;
}

 @media only screen and (max-width: 800px) {
    .contenedor-header {
      margin-left: 0;
    }
    .footer {
      margin-left: 0;
      position: unset;
    }
    .content {
      margin-left: 0;
      max-height: 500px;
    }
    .footer {
      position: sticky;
      bottom: 0;
      width: 100%;
    }
    .contain {
      position: relative;
      margin-top: -1.5vh;
    }
    .content {
      min-height: 0vh;
      overflow: auto;

    }
  } 
</style>
