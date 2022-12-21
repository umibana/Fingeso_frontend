<template>
  <v-card color="#292929" dark style="padding: 10px">
    <v-card-title class="text-h5">Nombre: {{getInfo.name}}</v-card-title>
    <v-card-subtitle> Cargo: {{ getInfo.tipoGrado }} </v-card-subtitle>
    <v-card-text>Facultad: {{ getInfo.facultad }} </v-card-text>
    <v-card-text>Departamento: {{ getInfo.departamento }} </v-card-text>
    <v-card-text>Rut: {{ getInfo.rut }} </v-card-text>
    <v-card-text>Correo: {{ getInfo.user.mail }} </v-card-text>
    <v-card-text>Rol: {{getInfo.user.rol}}</v-card-text>
    <v-card-subtitle v-if="evaluadores.length > 1">Evaluadores:</v-card-subtitle>
    <div v-if="evaluadores.length>1">
      <v-card color="#00447C" style="margin: 10px"
        v-for="(evaluador,i) in this.evaluadores"
                   :key = "i">
        <v-card-text dark>Nombre: {{evaluador.name}}</v-card-text>
        <v-card-text >Cargo: {{evaluador.tipoGrado}}</v-card-text>
        <v-card-text >Rut: {{evaluador.rut}}</v-card-text>
      </v-card>
    </div>

    <v-btn class="text--lighten-5"
           color="#EC8325"
           block
    dark
    @click="cerrarSesion">
      Cerrar Sesión
    </v-btn>

  </v-card>

</template>

<script>
import {mapGetters,mapActions} from "vuex";
import ComiteServices from "~/services/ComiteServices";
export default {
  name: "inicio",
  data() {
    return {
      evaluadores:[{
        name: String,
        rut: String,
        tipoGrado: String,
      }
      ]
    }
  },
  computed:{
    ...mapGetters('sesion',['getIdUser','getType','getInfo','getView'])
  },created() {
    this.obtenerEvaluadores()
  },
  methods: {
    ...mapActions('sesion', ['setState','changeView']),
    cerrarSesion(){
      location.replace("http://localhost:3000")
    },
    obtenerEvaluadores: async function(){
      const idAcademico = this.getInfo.id;
      const response = await ComiteServices.getEvaluadores(idAcademico);
      this.evaluadores = response.data
    },
  }
}
</script>

<style scoped>

</style>
