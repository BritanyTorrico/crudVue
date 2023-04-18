<template>
    <div>
        <h3 class="form_title">{{ editando ? 'EDITAR USUARIO' : 'REGISTRAR USUARIO' }}</h3>

        <form class="container_form" @submit.prevent="submitForm">
            <div class="container_input">
                <label class="form_label">Nombre:</label>
                <input type="text" name="nombre" id="nombre" placeholder="Escribe el nombre del usuario" :class="
                    v$.usuario.nombre.$invalid
                        ? 'form_check-input-error'
                        : 'form_check-input'
                " v-model="usuario.nombre" />
                <span v-if="v$.usuario.nombre.$invalid" class="form_check-error">
                    No se aceptan caracteres especiales y maxima una longitud de 10
                </span>
            </div>

            <div class="container_input">
                <label class="form_label">Correo:</label>
                <input type="text" name="correo" id="correo" placeholder="Escribe el correo del usuario" :class="
                    v$.usuario.nombre.$invalid
                        ? 'form_check-input-error'
                        : 'form_check-input'
                " v-model="usuario.correo" />
            </div>
            <div>
                <button class='btn btn-primary' type="submit">{{ editando ? 'EDITAR' : 'REGISTRAR ' }}</button>
            </div>
        </form>

    </div>
</template>

<script>
import { required, maxLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
const alpha = helpers.regex(/^[a-zA-ZÀ-ÿ\s]{1,40}$/)//no caracteres especiales

export default {
    name: "CrearUsuario",
    setup() {
        return { v$: useVuelidate() }
    },
    created() {
        if (this.$store.getters.getEditando) {
            this.getUser();
        }
    },
    data() {
        return {
            usuario: {
                nombre: "",
                apellido: "",
                correo: "",
            },
            editando: this.$store.getters.getEditando
        }
    },

    validations() {
        return {
            usuario: {
                nombre: {
                    required,
                    maxLength: maxLength(10),
                    alpha

                },
                correo: { required },
            }
        }

    },

    methods: {
        async registrarUsuario() {
            try {
                await this.$http.post("/usuario", {
                    nombre: this.usuario.nombre,
                    correo: this.usuario.correo
                });
            } catch (error) {
                console.log(error);
            }
        },
        async editarUsuario() {
            try {
                const resp = await this.$http.patch(`/usuario/${this.$route.params.id}`, {
                    nombre: this.usuario.nombre,
                    correo: this.usuario.correo
                });

                console.log(resp);
            } catch (error) {
                console.log(error);
            }
        },
        async getUser() {
            try {
                const resp = (await this.$http.get(`/usuario/${this.$route.params.id}`)).data;
                this.usuario = resp;
                this.$store.dispatch('setEditarAction', false)
            } catch (error) {
                console.log(error);
            }
        },
        async submitForm() {
            const formValidate = await this.v$.usuario.$validate();
            if (formValidate) {
                if (this.editando) {
                    await this.editarUsuario();
                } else {
                    await this.registrarUsuario();
                }
                this.$router.push(`/listar`);
                alert('Se registro correctamente');
            } else {
                alert('rellene correctamente los campos del formulario');
            }
        },

    }

}
</script>

<style scoped>
.form_check-input {
    border: 2px solid gray;
    background: #fff;
    border-radius: 9px;
    height: 45px;
    width: 100%;
    line-height: 45px;
    transition: 0.3s ease all;

}
.form_check-input:focus {
    border: 2px solid #32CD32;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    outline: none;
}

.form_check-input-error {

    border: 2px solid red !important;
    background: #fff;
    border-radius: 9px;
    height: 45px;
    width: 100%;
    line-height: 45px;
    transition: 0.3s ease all;
}

.form_check-input-error:focus {
    border: 2px solid red;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    outline: none;
}

.form_check-error {
    color: #ed1c24;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.form_title {
    text-align: left;
    color: #3d8af7;
    font-size: 36px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.form_label {
    color: #3f4b5b;
    font-size: 20px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.container_input {
    position: relative;
    z-index: 90;

}

.container_form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 0 20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
}
</style>