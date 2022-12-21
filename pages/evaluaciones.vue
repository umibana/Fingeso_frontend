<template>
  <v-card class="title text-h5" dark style="padding: 10px">
    <v-card-title>Evaluaciones asignadas</v-card-title>
    <v-card light v-if="evaluados.length >= 1">
      <v-card v-for="(evaluado,i) in this.evaluados"
      :key = "i" style="padding: 10px">
        <v-card-title>{{evaluado.name}}</v-card-title>
        <v-card-subtitle>{{evaluado.tipoGrado}}</v-card-subtitle>
        <v-btn color="#00447C" @click="showModal = true">Ver compromisos</v-btn>
        <div v-if="showModal" class="modal" >
          <compromisos-evaluador :academico ="evaluado.id"></compromisos-evaluador>
          <v-btn @click="showModal = false" style="margin-top: 10px" color="#00447C">Close</v-btn>
        </div>
        <v-btn v-if="getType === 'DECANO'" color="#EC8325">Finalizar evaluacion</v-btn>
      </v-card>
    </v-card>
    <v-card light v-if="evaluados.length === 0" >
      <v-card-title>Sin evaluaciones asignadas</v-card-title>
    </v-card>
  </v-card>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
import ComiteServices from "~/services/ComiteServices";
import compromisosEvaluador from "~/pages/compromisosEvaluador.vue";
export default {
  name: "Evaluaciones",
  components: {compromisosEvaluador},
  data() {
    return {
      evaluados: [{
        id: BigInt,
        name: String,
        tipoGrado: String
      }],
      showModal: false
    }
  },
  computed:{
    ...mapGetters('sesion',['getIdUser','getType','getInfo','getView'])
  },created() {
    this.obtenerEvaluados()
  },
  methods:{
    ...mapActions('sesion', ['setState','changeView']),
    obtenerEvaluados: async function(){
      const response = await ComiteServices.getEvaluados({id:this.getInfo.id})
      this.evaluados = response.data;
    }
  }

}
</script>
<style scoped>
.modal {
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  min-width: 1000px;
  min-height: 200px;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>
