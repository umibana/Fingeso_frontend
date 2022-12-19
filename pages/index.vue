<template>
  <login v-if="getView"></login>
  <default-layout v-else-if="!getView">
  </default-layout>
</template>

<style scoped>

</style>

<script>
import {mapGetters,mapActions} from "vuex";

import Login from "~/pages/login.vue";
// import Compromisos from "~/pages/compromisos.vue";
import DefaultLayout from "~/layouts/default.vue";

export default {
  name: 'IndexPage',
  components: {DefaultLayout,  Login},
  layout: 'empty',
  computed:{
    ...mapGetters('sesion',['getIdUser','getType','getInfo','getView'])
  },created() {
  },
  methods: {
    ...mapActions('sesion', ['setState','changeView']),

  }
}
</script>
