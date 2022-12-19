<template>
  <v-col cols="12">
    <v-card color="#292929" dark>
      <v-card-title class="text-h5"> Compromiso {{ numero }} </v-card-title>
      <v-card-subtitle> Categoria: {{ categoria }} </v-card-subtitle>
      <v-card-text> {{ descripcion }} </v-card-text>
      <UploadFile> </UploadFile>
    </v-card>
  </v-col>
</template>

<script>
import UploadFile from "~/components/UploadFile.vue";

export default {
  name: 'CompromisoComponente',
  components: {UploadFile},
  props: {
    descripcion: {
      type: String,
      default: 'Unknown description',
    },
    categoria: {
      type: String,
      default: 'Unknown category',
    },
    numero: {
      type: Number,
      default: 0,
    },
  },
}
</script>
