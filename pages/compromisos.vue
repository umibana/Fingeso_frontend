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
axios.defaults.baseURL = 'http://localhost:8080'
export default {
  data: function () {
    return {
      compromisos: [],
    }
  },
  created: function () {
    this.getCompromisos()
  },
  methods: {
    getCompromisos: async function () {
      const response = await axios.get('/compromisos')
      this.compromisos = response.data
    },
  },
}
</script>
