import Vue from "vue";
import Vuex from 'vuex';
import UserServices from "~/services/UserServices";
import AcademicoServices from "~/services/AcademicoServices";
Vue.use(Vuex)
export default {
  namespaced: true,
  state:{
    id_user: 0,
    type: "",
    info: {
      departamento: "",
      facultad: "",
      id: 0,
      name: "",
      rut: "",
      tipoGrado: "",
      user: {
        id: 0,
        mail: "",
        pass: "",
        rol: ""
      }
    },
    view: true
  },

  getters:{
    getIdUser(state){
      return state.id_user;
    },
    getType(state){
      return state.type;
    },
    getInfo(state){
      return state.info;
    },
    getView(state){
      return state.view;
    }
  },
  mutations:{
    setIdUser(state, idUser){
      state.id_user = idUser;
    },
    setType(state, type){
      state.type = type;
    },
    setInfo(state, info){
      state.info = info;
    },
    setView(state, view){
      state.view = view;
    }
  },
  actions:{
    setState: async function({commit},idUser){
      try{
        const rol = await UserServices.getRol(idUser);
        const academico = await AcademicoServices.getAcademico(idUser);
        commit('setIdUser',idUser);
        commit('setType',rol.data);
        commit('setInfo',academico.data);
      }catch (e) {
        console.log(e);
      }
    },
    changeView({commit},value){
      commit('setView',value)
    }
  },
  modules:{
  }
}
