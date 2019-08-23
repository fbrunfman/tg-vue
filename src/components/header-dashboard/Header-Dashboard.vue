<template>
  <div class="contenedor-header">
    <div class="main-icono">
      <i class="fas icono fa-bars mx-4" @click="expandMobile"></i>
       <img src="/img/mobile/logotgmobile.svg" alt="Logo TG">
    </div>
    <div class="main-icono mx-3">
      <i class=" icono fas fa-home"></i>
    </div>
    <div class="main-icono main-play mx-3">
      <i class="play fas fa-play"></i> 
    </div>
    <div class="main-icono mx-3">
      <i class="icono far fa-bell"></i>
    </div>
    <div class="main-icono mx-3">
      <i class="icono far fa-comment-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
computed: {
  mobile() {
    return this.$store.state.mobile;
  }
},
methods: {
  expandMobile() {
    this.$store.commit('mobile', true);
  }
}
}
</script>

<style lang="scss" scoped>
@import './../../sass/app';

  .icono {
    display: none;
    font-size: 30px;
  }

  .main-play {
    display: none;
    padding: 10px;
    background-color: $brand-orange;
    border-radius: 50%;
  }

  .play {
    font-size: 20px;
    position: relative;
    left: 2px;
    color: white;
  }

  @media only screen and (max-width: 800px) {
    .icono {
      display: inline-block;
      color: white;
    }
    img {
      display: none;
    }
    .contenedor-header {
      height: 69px;
    }
    .main-play {
      display: flex;
      align-items: center;
      justify-content: center; 
    }
    .contenedor-header {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  } 

</style>

