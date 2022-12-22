import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex)
export default {
  namespaced: true,
  state:{
    viewForm: false,
    idUserAcademico: 0
  },

  getters:{
    getViewForm(state){
      return state.viewForm
    },
    getIdAcademico(state){
      return state.idUserAcademico
    }
  },
  mutations:{
    setViewForm(state,value){
      state.viewForm = value;
    },
    setIdAcademico(state, value){
      state.idUserAcademico = value;
    }
  },
  actions:{
    changeFormView({commit},value){
      commit('setViewForm',value)
    },
    changeIdAcademico({commit}, value){
      commit('setIdAcademico',value)
    }
  },
  modules:{
  }
}
