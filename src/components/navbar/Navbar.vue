<template>
  <transition>
    <div class="contenedor-nav" :class="{'expanded-nav' : expanded, 'nav-mobile' : mobile, 'contenedor-nav-mobile' : mobile}"  @mouseover="showNav" @mouseleave="collapseNav" >
      <div class="toggle-nav my-2 d-flex justify-content-between align-items-center">
        <div>
        <i v-if="!mobile" class="fas fa-ellipsis-v" @click="fixNav"></i>
        <i v-if="mobile" class="fas fa-times cerrar-nav" @click="closeNav"></i>
        </div>
<!--         <div class="mr-2 titulo-nav-mobile">TODOSGAMERS</div> -->
      </div>
      <div class="main-iconos my-4">
        <div class="icono my-4">
          <div class="d-flex align-items-center">
            <i class="fas fa-home"></i>
            <div class="icono-text mx-2" v-show="expanded || mobile"><span>Partidas Rapidas</span></div>
          </div>
        </div>
        <div class="icono my-4">
          <div class="d-flex align-items-center">
          <i class="fas fa-home"></i>
          <div class="icono-text mx-2" v-show="expanded || mobile"><span>Misiones</span></div>
          </div>
        </div>
        <div class="icono my-4">
          <div class="d-flex align-items-center">
          <i class="fas fa-home"></i>
          <div class="icono-text mx-2" v-show="expanded || mobile"><span>Torneos</span></div>
          </div>
        </div>
        <div class="icono my-4">
          <div class="d-flex align-items-center">
          <i class="fas fa-home"></i>
          <div class="icono-text mx-2" v-show="expanded || mobile"><span>Mis Equipos</span></div>
          </div>
        </div>
        <div class="icono my-4" @click="expandItem">
          <div class="d-flex align-items-center">
            <i class="fas fa-home"></i>
            <div class="icono-text mx-2" v-show="expanded || mobile"><span>Ranking</span></div>
            <i class="fas ml-2 chevron mt-1" :class="{'fa-chevron-down' : !expandedItem, 'fa-chevron-up' : expandedItem }"></i>
          </div>
          <div class="subitems mt-3" v-if="expandedItem && expanded">
            <div><span>item</span></div>
            <div><span>item</span></div>
            <div><span>item</span></div>
            <div><span>item</span></div>
          </div>
        </div>
        <div class="icono my-4">
          <div class="d-flex align-items-center">
          <i class="fas fa-home"></i>
          <div class="icono-text mx-2" v-show="expanded || mobile"><span>Noticias</span></div>
          </div>
        </div>
        <div class="icono my-4">
          <div class="d-flex align-items-center">
          <i class="fas fa-home"></i>
          <div class="icono-text mx-2" v-show="expanded || mobile"><span>Tutoriales</span></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
data() {
  return  {
    expanded: false,
    showText: false,
    expandedItem: false,
  }
},
mounted() {
  this.mobile
},
computed: {
  mobile() {
      return this.$store.state.mobile;
  }
},
methods: {
  showNav() {
    this.expanded = true
    this.showText = true
  },
  collapseNav() {
    this.expanded = false
    this.showText = false
  },
  expandItem() {
    this.expandedItem = !this.expandedItem
  },
  closeNav() {
    this.$store.commit('mobile', false);
    this.expandedItem = false
  },
  fixNav() {

  }
}
}
</script>

<style lang="scss" scoped>
@import './../../sass/app';
.contenedor-nav {
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  width: 75px;
  padding: 10px;
  min-height: calc(103vh);
  background-color: rgba($color: $brand-six, $alpha: 1);
  border-width: 0 1px 0 0;
  z-index: 999;
  transition: all .01s ease-in-out;
  display: flex;
  flex-direction: column;
  
}

.icono {
  cursor: pointer;
  :hover {
    color: $brand-secondary;
  }
}

.toggle-nav {
  margin-left: 21px;
}

.expanded-nav {
  width: 200px;
}

.main-iconos {
  margin-left: 15px;
}

.chevron {
  font-size: 11px;
}

.subitems {
  font-size: 14px;
  color: $brand-secondary;
  font-weight: 900;
}


.cerrar-nav {
  font-size: 26px;
}

.titulo-nav-mobile {
  font-size: 18px;
  font-weight: 900;
}

@media only screen and (max-width: 800px) {
  .contenedor-nav {
    display: none;
    }
    .contenedor-nav-mobile {
      display: inline-block;
      overflow: scroll;
      max-height: 1vh;
      .icono {
          font-size: 14px !important;
      }
      .cerrar-nav {
        font-size: 16px;
      }
    }
    .nav-mobile {
      width: 100vw;
      .icono {
        font-size: 20px;
        i {
          color: $brand-orange;
        }
        .subitems {
          font-size: 13px;
        }
      }
    }
} 


</style>