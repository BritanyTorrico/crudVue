<template>
<div>

    <button class="btn btn-danger" @click="handleShow">{{titulo}}</button>
    <div class="modal" v-if="show">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{idUser}}</h5>
                </div>
                <div class="modal-body">
                    <p>{{ mensaje }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="show =false">Cerrar</button>
                    <button type="button" class="btn btn-primary"  @click="handleConfirm">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    
</template>
  
<script>
export default {
    props: {
        titulo: String,
        mensaje: String,
        idUser:Number


       
        
        
   
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
      handleShow(){
        this.show=true;
      },
      handleConfirm(){
        this.$emit('handleDelete',true);
      }

    },
}
</script>
  
<style >
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>