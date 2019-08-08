<template>
   <div class="next-game">
      <div class="titulo-next d-flex align-items-center">
            <h3 class="ml-2 mt-1">{{translateStore.tituloSecundario}}</h3>
      </div>
      <div class="proxima d-flex align-items-center" v-for="(play, index) in quickplay" :key="index">
            <div class="tipo text-center"> {{ play.region_game.region.toUpperCase() }} </div>
            <div class="jugadores text-center">45/{{ play.max_count_users }}</div>
            <div class="horario text-center mr-4">14:32</div>
            <div class="arrow-right text-center">
               <div class="flecha d-flex mr-2">
                  <i class="fas fa-chevron-right"></i>
               </div>
            </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Quickplay',
   props: { quickplay: {type: Array, required: false} },
   data() {
      return {
      }
   },
   methods: {
      selectQuickplay(play) {
         // console.log(play);
      }
   },
   computed: {
      translateStore() {
         return this.$store.state.translate.quickplay;
      }
   },
   mounted() {
   },
}
</script>

<style lang="scss" scoped>
@import './../../../sass/app';
.next-game {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .titulo-next {
        background-color: #00e836cc;
        flex: 0 0 33.3%;
        font-size: 1.5em;
    }
    .proxima {
        background-color: #040c1df0;
        color: white;
        flex: 1 0 32.5%;
        .tipo {
            flex: 0 0 26%;
        }
        .jugadores {
            flex: 0 0 26%;
            color: $brand-green;
            font-weight: 900;
        }
        .horario {
            flex: 0 0 26%;
        }
        .arrow-right {
            flex: 0 0 14%;
        }
    }
}
</style>
