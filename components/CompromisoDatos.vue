<template>
  <v-col cols="12">
    <v-card color="#292929" dark>
      <v-card-title class="text-h5"> Compromiso </v-card-title>
      <v-card-subtitle> Categoria: {{ categoria }} </v-card-subtitle>
      <v-card-actions>
        <AgregarEvidenciaButton> </AgregarEvidenciaButton>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      categoria: 'VIME',
    }
  },
}
</script>
