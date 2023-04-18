import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editandoUsuario: false,
    data:[]

  },
  getters: {
    getEditando(state) {
      return state.editandoUsuario;
    }
    ,
    getData(state) {
      return state.data;
    }
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },

    setEditar(state,payload){
      state.editandoUsuario= payload;
    },
  },
  actions: {
    setEditarAction({commit},payload){
      commit('setEditar',payload);
    },
    getUsers({ commit }){

    }
  },
  modules: {},
});
