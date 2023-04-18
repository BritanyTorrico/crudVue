<template>
  <div>
    <h2>PADRE</h2>
    <Hijo titulo ='titulo desde el padre' 
    @handleHijo="modificarPrueba"
    :handleDelete="eliminarEnPadre"
    />
    {{this.variableRecibida}}
  </div>
</template>

<script>
import Hijo from './Hijo.vue'
export default {
    name: "Padre",
  components: { Hijo },
  data() {
    return {
        variableRecibida: '',
        apellido: 'Browser'
    }
  },
  methods:{
    modificarPrueba(value){
            this.variableRecibida=value;
        },
        eliminarEnPadre(){
            console.log('elimino');
        }
  }

}
</script>

<style>

</style>