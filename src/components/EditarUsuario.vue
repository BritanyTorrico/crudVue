<template>
    <div>
        <h3 class="form_title">EDITAR USUARIO</h3>
        {{ user}}
        <div class="container_input">
            <label class="form_label">Nombre:</label>
            <input type="text" name="nombre" id="nombre" placeholder="Escribe el nombre del usuario" 
            v-model="user.nombre" />
          
        </div>

    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
export default {
    name: 'EditarUsuario',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            user: {
                nombre: null,
                id: null,
                correo: null
            }
        }
    },
 
    validations() {
        return {
            user: {
                nombre: {
                    required,
                    maxLength: maxLength(10),
                    alpha

                },
                correo: { required },
            }
        }

    },


    async mounted() {
        await this.getUser();
    },
    methods: {
        async getUser() {
            try {
                const resp = (await this.$http.get(`/usuario/${this.$route.params.id}`)).data;
                this.user = resp;
                console.log(this.user);
            } catch (error) {
                console.log(error);
            }
        },

    }
}
</script>

<style></style>