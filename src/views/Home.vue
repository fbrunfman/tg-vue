<template>
  <div class="d-flex flex-column contain">
        
        <div class="home-content">
          <div class="user-info p-3 text-white d-flex align-items-center justify-content-between">
            <div class="user-description mt-3 d-flex align-items-center">
              <div class="logo d-flex align-items-center ml-2">
                <i class="fas fa-user"></i>
              </div>
              <div class="personal-info ml-2">
                <div class="nick d-flex align-items-center">
                  <span>Nickname</span>
                  <i class="fas fa-star ml-1"></i>
                </div>
                <div class="user-start d-flex align-items-center">
                  <div class="stat1 d-flex align-items-center">
                    <i class="far fa-chart-bar"></i>
                    <span class="ml-1 mr-3">Rank <b>17</b></span>
                  </div>
                  <div class="stat2 d-flex align-items-center">
                    <i class="fas fa-cog"></i>
                    <span class="ml-1">Puntos <b>1177</b></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="next mr-2">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div class="overview-game mt-4 d-flex align-items-center justify-content-between">
            <div class="overview-left ml-3">
              <div class="next">PROXIMA MISION</div>
              <div class="title">JUEVES DE FREEFIRE #81</div>
              <div class="overview-time">02h 33m</div>
            </div>
            <div class="overview-right mr-3">
              <div class="container-right">
                 <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div class="diamantes">
            <div class="diamantes-text col-7">
              <div class="pregunta">BUSCAS DIAMANTES?</div>
              <div class="subtitle">Se el mejor del ranking y gana miles de diamantes!</div>
              <div class="tabla-diamantes">
                <div class="titulo-diamantes-tabla mt-3">
                  TOP 3 AGOSTO
                </div>
              </div>
            </div>
          </div>
          <div class="body-diamantes">
            <div class="content-diamantes d-flex align-items-center mx-2">
              <div class="diamantes-user"><i class="fas fa-user"></i></div>
              <div class="d-flex justify-content-between col-10 ml-2 lista-users text-warning ">
                <div class="diamantes-nombre">Nombre de usuario</div>
                <div class="puntaje-diamantes">1500</div>
              </div>
            </div>
          </div>
          <div class="boton-ranking-container d-flex justify-content-center">
            <div class="boton-ranking">
              VER RANKING COMPLETO
            </div>
          </div>
          <div class="carousel-equipos mx-3 mb-4">
            <div class="titulo-carousel">MIS EQUIPOS</div>
            <div class="contenedor-mis-equipos">
              <div class="mi-equipo">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100 img-carousel" src="/img/mobile/single_freefire.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="/img/mobile/single_freefire.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="/img/mobile/single_freefire.jpg" alt="Third slide">
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="resultados mt-4 mx-3">
            <div class="resultados-titulo">
              MIS RESULTADOS
            </div>
            <div class="resultados-lista d-flex justify-content-between">
              <div class="result">
                JUEVES DE PUBG MOBILE #81
              </div>
              <div class="number-result">
                762
              </div>
            </div>
            <div class="resultados-lista d-flex justify-content-between">
              <div class="result">
                JUEVES DE PUBG MOBILE #81
              </div>
              <div class="number-result">
                762
              </div>
            </div>
            <div class="duda d-flex justify-content-center text-white mt-4 mb-2">
              TIENES ALGUNA DUDA?
            </div>
          </div>
          <div class="ayuda">
            <div class="boton-ayuda">
              CENTRO DE AYUDA
            </div>
          </div>
          </div>
    </div>
</template>

<script>
export default {
  name:'Home',
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import './../sass/app';

.contenedor-home {
  background-color: $brand-five;
  min-height: 100vh;
}

.home-content {
  margin-left: 75px;
  min-height: 80vh;
}

.footer {
  margin-left: 75px;
}

.contenedor-header {
  background-color: $brand-six;
  padding: 10px
}

.footer {
  position: absolute;
  top: 0;
  width: 94.4%;
}

.user-info {
  background-image: url('/img/mobile/backgroundtitle1.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 13.5px;
}

.logo {
  background: rgb(199, 198, 198);
  padding: 13px;
  border-radius: 50%;
  i {
    font-size: 22px;
  }
}

.nick i {
  color: $brand-yellow;
}

.stat1, .stat2, .next {
  i {
    color: $brand-orange;
  }
}

  @media only screen and (max-width: 800px) {
    .contenedor-header {
      margin-left: 0;
    }
    .footer {
      margin-left: 0;
    }
    .home-content {
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
    .home-content {
      min-height: 0vh;
      overflow: auto;

    }
  } 

  .overview-game {
    margin: 0 20px;
    border: 1px solid $brand-orange;
    height: 100px;
    background-image: url('/img/mobile/single_freefire.jpg');
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    font-weight: 900;
    .next {
      font-size: 12px;
      color: $brand-orange;
    }
    .title {
      color: white;
    }
    .overview-time {
      color: $brand-third;
    }
    .container-right {
      background:$brand-orange;
      font-size: 14px;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
  .diamantes {
    background-image: url('/img/mobile/diamantes.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    position: relative;
    .diamantes-text {
      color: white;
      position: absolute;
      top: 85px;
      .pregunta {
        font-size: 23px;
        line-height: 1;
        font-weight: 900;
      }
      .subtitle {
        font-size: 13px;
        margin-top: 8px;
      }
    }
    .titulo-diamantes-tabla {
      color: $brand-orange;
    }
  }

  .body-diamantes {
    position: relative;
    color: white;
    bottom: 64px;
    .diamantes-user {
      background: rgb(184, 184, 184);
      padding: 6px;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .lista-users {
      color: $brand-yellow;
      border-bottom: 1px solid $brand-yellow;
      padding-left: 0 !important;
      padding-right: 0 !important;
      font-weight: 900;
    }
  }
  .boton-ranking {
    border: 1px solid $brand-orange;
    border-radius: 15px;
    padding: 5px;
    width: 240px;
    display: flex;
    justify-content: center;
    color: $brand-orange;
    margin-bottom: 15px;
  }

  .titulo-carousel {
    color: $brand-orange;
    font-weight: 900;
    font-size: 18px;
  }

  .mi-equipo {
    border: 1px solid $brand-orange;
    height: 75px;
  }

  .resultados {
    .resultados-titulo {
      color: $brand-orange;
      font-weight: 900;
      font-size: 18px;
    }
    .resultados-lista {
      color: white;
      font-size: 13px;
      font-weight: 900;
      border-bottom: 1px solid $brand-primary;
      margin-bottom: 10px;
    }
  }

  .img-carousel {
    width: 100%;
  }

  .ayuda {
    background-image: url('/img/mobile/backgroundtitle1.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 63px !important;
    display: flex;
    justify-content: center;
    .boton-ayuda {
      border: 1px solid $brand-orange;
      width: 230px;
      display: flex;
      font-weight: 900;
      justify-content: center;
      color: $brand-orange;
      border-radius: 40px;
      padding: 4px;
      height: 35px;
      margin-top: 15px;
    }
  }

  img.d-block.w-100 {
    height: 72px;
    margin-top: 0.4px;
    object-fit: cover;
  }

  @media only screen and (min-width: 800px) {
    .user-info {
      margin-top: 3rem !important;
    }
    .overview-game {
      background-size: initial;
      width: 643px;
      margin: 0 auto;
    }
    .contenedor-mis-equipos {
      width: 643px;
      margin: 0 auto;
    }
    .mi-equipo {
      height: 142px;
    }
    img.d-block.w-100 {
    height: 140px;
    }
  } 

</style>


