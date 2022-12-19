import Vue from "vue";
import Vuex from 'vuex';
import {Store} from "vuex";
import sesion from "./sesion"

Vue.use(Vuex)
export const a = new Store({
  modules:{
    sesion
  }
})
