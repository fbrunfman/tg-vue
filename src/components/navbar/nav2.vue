<template>
  <div class="max-contenedor" v-if="!toggle" @mouseover="showNav" @mouseleave="collapseNav" >
    <div class="container" :class="{'show': showSidebar}">
      <div class="control">
        <i class="fas fa-ellipsis-v" @click="activeToggle"></i>
      </div>
      <div class="navigation-icons">
        <i class="fas fa-home"></i>
        <i class="fas fa-camera-retro"></i>
        <i class="fas fa-user-circle"></i>
        <i class="fas fa-info-circle icono-item" v-if="down3"></i>
        <i class="fas fa-info-circle icono-item" v-if="down3"></i>
        <i class="fas fa-info-circle icono-item" v-if="down3"></i>
        <i class="fas fa-info-circle icono-item" v-if="down3"></i>
        <i class="fas fa-info-circle icono-item" v-if="down3"></i>
        <i class="fas fa-comment-dots"></i>
        <i class="fas fa-info-circle"></i>
      </div>
      <div class="navigation-links">
        <transition-group name="fade">
          <div v-show="showLink" key="1">Home</div>
          <div v-show="showLink" key="2">Portfolio</div>
          <div v-if="showLink" class="d-flex align-items-center"  @click="dropDown3" key="3">About Me
            <i class="fas ml-2" :class="{'fa-chevron-down' : down3, 'fa-chevron-up' : !down3 }"></i></div>
          <div v-if="showLink && down3 " key="6" class="ml-2 item-text"><span>item1</span></div>
          <div v-if="showLink && down3 " key="6" class="ml-2 item-text"><span>item1</span></div>
          <div v-if="showLink && down3 " key="6" class="ml-2 item-text"><span>item1</span></div>
          <div v-if="showLink && down3 " key="6" class="ml-2 item-text"><span>item1</span></div>
          <div v-if="showLink && down3 " key="6" class="ml-2 item-text"><span>item1</span></div>
          <div v-show="showLink" key="4">Contact</div>
          <div v-show="showLink" key="5">FAQ</div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        showSidebar: false,
        showLink: false,
        toggle : false,
        down3: false
      }
    },
    methods: {
      showNav() {
          this.showSidebar = true;
          this.showLink = true;
      },
      collapseNav() {
        this.showSidebar = false
        this.showLink = false;

      },
      activeToggle() {

      },
      dropDown3() {
        this.down3 = !this.down3
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './../../sass/app';
  .container {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 70px;
    padding: 10px;
    min-height: calc(100vh);
    background-color: rgba($color: $brand-six, $alpha: .8);
    border-width: 0 1px 0 0;
    z-index: 999;
    transition: all .01s ease-in-out;
    .control {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin-bottom: 10px;
      i {
        font-size: 2rem;
        cursor: pointer;
        transition: all .01s ease-in-out;
      }
    }
    &.show {
      width: 250px;
      .control > i {
        color: white;
        transform: rotateZ(-180deg);
      }
      .navigation-icons {
        color: white;
      }
    }
    .navigation-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      float: left;
      i {
        font-size: 2rem;
        padding: 10px 0;
        cursor: pointer;
        transition: all .5s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
    .navigation-links {
      padding-top: 14px;
      float: left;
      div {
        font-size: 1.35rem;
        padding-left: 10px;
        margin-bottom: 18px;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
  }
  @mixin nav-childs($values...) {
    @each $var in $values {
      &:nth-child(#{$var}) {
        transition: transform linear calc(.01s * #{$var}), display .5s;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    @include nav-childs(1,2,3,4,5);
  }
  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }

  .icono-item {
    opacity: 0;
  }

  .item-text {
    span {
      font-size: 14px;
      color: $brand-secondary;
    }
  }


</style>