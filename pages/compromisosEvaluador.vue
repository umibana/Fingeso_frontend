<template>
  <v-row justify="center" align="center">
    <CompromisoDatosEvaluador
      v-for="(compromiso, i) in compromisos"
      :key="i"
      :numero="i + 1"
      :categoria="compromiso.tipo"
      :descripcion="compromiso.descripcion"
    >
    </CompromisoDatosEvaluador>
  </v-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
import CompromisoDatosEvaluador from "~/components/CompromisoDatosEvaluador.vue";
export default {
  name: "compromisosEvaluador",
  components: {CompromisoDatosEvaluador},
  props:['academico'],
  data: function () {
    return {
      compromisos: []
    }
  },
  computed:{
    ...mapGetters('sesion',['getIdUser','getType','getInfo'])
  },
  created: function () {
    this.getCompromisos()
  },
  methods: {
    ...mapActions('sesion',['setState']),
    getCompromisos: async function () {
      const response = await axios.get('/compromisos/'+this.academico);
      this.compromisos = response.data;
    },

  }
}
</script>

<style scoped>

</style>
