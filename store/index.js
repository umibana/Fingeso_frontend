import Vue from "vue";
import Vuex from 'vuex';
import {Store} from "vuex";
import sesion from "./sesion"
import form from "~/store/form";

Vue.use(Vuex)
export const a = new Store({
  modules:{
    sesion,
    form
  }
})
