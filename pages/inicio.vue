<template>
  <v-card color="#292929" dark>
    <v-card-title class="text-h5">Nombre: {{getInfo.name}}</v-card-title>
    <v-card-subtitle> Cargo: {{ getInfo.tipoGrado }} </v-card-subtitle>
    <v-card-text>Facultad: {{ getInfo.facultad }} </v-card-text>
    <v-card-text>Departamento: {{ getInfo.departamento }} </v-card-text>
    <v-card-text>Rut: {{ getInfo.rut }} </v-card-text>
    <v-card-text>Correo: {{ getInfo.user.mail }} </v-card-text>
    <v-card-text>Rol: {{getInfo.user.rol}}</v-card-text>
  </v-card>

</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
  name: "inicio",
  computed:{
    ...mapGetters('sesion',['getIdUser','getType','getInfo','getView'])
  },created() {
  },
  methods: {
    ...mapActions('sesion', ['setState','changeView']),

  }
}
</script>

<style scoped>

</style>
