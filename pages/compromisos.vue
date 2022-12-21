<template>
  <v-row justify="center" align="center">
    <CompromisoDatos
      v-for="(compromiso, i) in compromisos"
      :key="i"
      :numero="i + 1"
      :categoria="compromiso.tipo"
      :descripcion="compromiso.descripcion"
    >
    </CompromisoDatos>

    <v-col cols="12">
      <CrearCompromisoButton> </CrearCompromisoButton>
    </v-col>
  </v-row>
</template>

<!-- Esto despues debera leer del backend -->
<script>
import axios from 'axios'
import {mapGetters,mapActions} from "vuex";
import CrearCompromisoButton from "~/components/CrearCompromisoButton.vue";
import CompromisoDatos from "~/components/CompromisoDatos.vue";
axios.defaults.baseURL = 'http://localhost:8080'
export default {
  components: {CrearCompromisoButton,CompromisoDatos},
  data: function () {
    return {
      compromisos: [],
    }
  },
  computed:{
    ...mapGetters('sesion',['getIdUser','getType','getInfo'])
  },
  created: function () {
    this.getCompromisos()
    setInterval(()=>{
      this.getCompromisos()
    },3000)
  },
  methods: {
    ...mapActions('sesion',['setState']),
    getCompromisos: async function () {
      const response = await axios.get('/compromisos/'+this.getIdUser);
      this.compromisos = response.data;
    },

  }
}
</script>
