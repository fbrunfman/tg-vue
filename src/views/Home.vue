<template>
    <div class="contenedor-home">
      <div class="d-flex justify-content-center">
        <div class="botones d-flex flex-column col-7 justify-content-center">
          <a href="http://dev1.todosgamers.com/dashboard#/"><button class="btn btn-primary my-2">Ir a Dashboard</button></a>
          <a href="http://dev1.todosgamers.com/cms/tournaments/list#/"><button class="btn btn-primary my-2">Ir a Torneos CMS</button></a>
          <a href="http://dev1.todosgamers.com/tournaments#/"><button class="btn btn-primary my-2">Ir a Torneos</button></a>
          <a href="http://dev1.todosgamers.com/challenges#/"><button class="btn btn-primary my-2">Ir a Misiones</button></a>
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
</style>


