<template>
  <div>
    <h2>SOY EL HIJO</h2>
    <p>{{titulo}}</p>

    <!-- mandar del hijo   al   padre -->
    <button @click="handleEnviarPadre">EnviarPadre</button>



    <button @click="handleDelete">DELETE</button>
  </div>

</template>

<script>
export default {
    name: "Hijo",
    props:{
        titulo: String,
        handleDelete: Function
    },
    data() {
        return {
            nombreHijo: 'sulivan'
        }
    },
    methods: {
        handleEnviarPadre(){
        this.$emit('handleHijo',this.nombreHijo)
      }
    },
}
</script>

<style>

</style>