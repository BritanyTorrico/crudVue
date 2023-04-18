<template>
    <div>
        <h2>LISTAR USUARIOS</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">CORREO</th>
                    <th scope="col">OPCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in usuarios" :key="index" :value="item">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.correo }}</td>
                    <td>
                        <button class="btn btn-primary" v-on:click="editarUsuario(item)">Editar</button>
                        <alert-modal titulo="Eliminar" mensaje="Esta seguro de que quiere eliminar este registro?"
                        @handleDelete="eliminarUsuario" :idUser="item.id"
                        />
                    </td>
                </tr>
            </tbody>
        </table> 


        <div>

        </div>


    </div>
</template>

<script>


import AlertModal from './AlertModal.vue';


export default {
    components: { AlertModal },


    name: "ListaUsuarios",

    data() {
        return {
            usuarios: [{ nombre: "", correo: "" }],
            variableRecibida: false,

        }
    },
    methods: {
        async getUsers() {
            try {
                const resut = (await this.$http.get("/usuario")).data;
                this.usuarios = resut;
            } catch (error) {
                console.log(error);
            }
        },
        editarUsuario(user) {
            console.log(user);
            this.$store.dispatch('setEditarAction', true)
            this.$router.push(`/registrar/${user.id}`);
        },
         eliminarUsuario(value){
           
            console.log(value);
            
        
        },
        prueba(){
            console.log('asd');
        }
  

       

    },

    mounted() {
        this.getUsers();
    }
}
</script>

<style></style>