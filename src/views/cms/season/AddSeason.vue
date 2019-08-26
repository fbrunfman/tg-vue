<template>
  <div class="contenedor-addSeason">
    <div class="body-contenedor pt-5">
      <h1>AGREGAR NUEVA TEMPORADA</h1>
      <form>
        <div class="contenedor-formulario mx-2">
          <div class="inputs-one d-flex flex-column justify-content-center align-items-center">
            <input type="text" class="form-control col-md-6 my-2" placeholder="Nombre de la compañía" name="" id="">
            <select class="form-control col-md-6 my-2" name="" id="">
              <option value="">Seleccione un juego</option>
            </select>
          </div>
        </div>
        <div class="inputs-two-container d-flex justify-content-between">
          <div class="inputs-two col-lg-6">
            <h3>FILTROS:</h3>
            <select class="form-control" name="" id="">
              <option value="">Seleccione un juego</option>
            </select>
            <input type="text" name="" class="form-control my-2" placeholder="Nuevo Filtro" id="">
            <div class="botones-input d-flex">
              <button class="btn btn-warning mr-2">AGREGAR</button>
              <button class="btn btn-warning mx-2">MODIFICAR</button>
              <button class="btn btn-warning mx-2">QUITAR</button>
            </div>
          </div>
          <div class="inputs-two col-lg-6">
            <h3>RANGO DE FECHAS:</h3>
            <select class="form-control" name="" id="">
              <option value="">Seleccione un juego</option>
            </select>
             <input type="text" name="" class="form-control my-2" placeholder="Nombre del rango" id="">
             <input type="date" name="" class="form-control my-2" placeholder="Nombre del rango" id="">
             <input type="date" name="" class="form-control my-2" placeholder="Nombre del rango" id="">
             <div class="botones-input d-flex">
                <button class="btn btn-warning mr-2">AGREGAR</button>
                <button class="btn btn-warning mx-2">MODIFICAR</button>
                <button class="btn btn-warning mx-2">QUITAR</button>
              </div>
          </div>
        </div>
        <div class="contenedor-guardar d-flex justify-content-center mt-3">
          <button class="btn btn-warning mr-2">GUARDAR</button>
          <button class="btn btn-warning mx-2">LIMPIAR</button>
        </div>
      </form>
      <div class="divisor"></div>
      <form>
        <div class="temporadas-actuales">
          <h3>Temporadas actuales</h3>
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">JUEGO</th>
                <th scope="col">BOTONES</th>
                <th scope="col">ACCIONES</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <th scope="row">Free_Fire</th>
                  <td>
                    <div class="boton-text text-center">Temporada 1</div>
                    <select name="" id="" class="form-control">
                      <option value="">Opciones</option>
                    </select>
                  </td>
                  <td><div class="botonera d-flex align-items-center justify-content-center">
                        <button class="btn btn-warning mx-1">Editar</button>
                        <button class="btn btn-warning mx-1">Borrar</button>
                        <button class="btn btn-warning mx-1">Desac</button>
                      </div>
                  </td>
                  
                </tr>
                <tr>
                  <th scope="row">Free_Fire</th>
                  <td>
                    <div class="boton-text text-center">Temporada 1</div>
                    <select name="" id="" class="form-control">
                      <option value="">Opciones</option>
                    </select>
                  </td>
                  <td><div class="botonera d-flex align-items-center justify-content-center">
                        <button class="btn btn-warning mx-1">Editar</button>
                        <button class="btn btn-warning mx-1">Borrar</button>
                        <button class="btn btn-warning mx-1">Desac</button>
                      </div>
                  </td>
                  
                </tr>
                <tr>
                  <th scope="row">Free_Fire</th>
                  <td>
                    <div class="boton-text text-center">Temporada 1</div>
                    <select name="" id="" class="form-control">
                      <option value="">Opciones</option>
                    </select>
                  </td>
                  <td><div class="botonera d-flex align-items-center justify-content-center">
                        <button class="btn btn-warning mx-1">Editar</button>
                        <button class="btn btn-warning mx-1">Borrar</button>
                        <button class="btn btn-warning mx-1">Desac</button>
                      </div>
                  </td>
                  
                </tr>
                
              </tbody>
          </table>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
components: {
  
}
}
</script>

<style lang="scss" scoped>
@import './../../../sass/app';

.contenedor-addSeason {
  color: white;
  margin-left: 75px;
  h1 {
    font-size: 24px;
    color: $brand-orange;
    text-align: center;
  }
}

.table {
  color: white;
}

.table td, .table th { 
  vertical-align: inherit;
}
.body-contenedor {
  min-height: 100vh;
}

td {
    width: 35%;
}

.divisor {
  border: 2px solid $brand-six;
  margin: 15px 0;
}

@media only screen and (max-width: 800px) {
  .inputs-two-container {
    flex-direction: column;
    margin: 15px 0;
  }
  .inputs-two {
    margin: 30px 0
  }

  .contenedor-addSeason {
    margin: 0;
  }
  .botonera {
    flex-direction: column;
    button {
      margin: 3px 0;
    }
  }
  .botones-input {
    justify-content: center;
  }
}

</style>