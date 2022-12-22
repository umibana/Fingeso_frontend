<template>
  <v-card style="padding: 20px" light >
    <v-card-title class="text-h4" dark>Finalizar evaluación docente</v-card-title>
    <v-textarea
      v-model="descripcion"
      label="Descripción de la decisión"
      solo
      maxlength="500"
      required
    ></v-textarea>
    <v-select
      v-model="decisionEvidencia"
      :items="decisionesEvidencia"
      label="Decisión evidencia"
      required
    ></v-select>
    <v-select
      v-model="decisionCargo"
      :items="decisionesCargo"
      label="Decisión cargo"
      required
    ></v-select>
    <v-btn @click="submit" color="#00447C" style="color: white">Finalizar</v-btn>
    <v-btn @click="closeForm" color="#EC8325">Cancelar</v-btn>
  </v-card>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
import AcademicoServices from "~/services/AcademicoServices";
import ComiteServices from "~/services/ComiteServices";
export default {
  name: "EvaluationForm",
  data: () => ({
    select: { text: 'Aprobar', value: 0 },
    decisionesEvidencia: [
      { text: 'Rechazar', value: 0 },
      { text: 'Aprobar', value: 1 },
    ],
    decisionesCargo:[
      {text: 'Ascender', value: 0},
      {text: 'Mantener', value: 1}
    ],
    decisionEvidencia: -1,
    decisionCargo: -1,
    descripcion: '',
    academico: {
      id: BigInt,
      name: String,
      tipoGrado: String,
      user:{
        id: BigInt,
      }
    }
  }),
  props:{
    idAcademico: Number
  },
  computed:{
    ...mapGetters('form', ['getViewForm','getIdAcademico'])
  },
  methods:{
    ...mapActions('form',['changeFormView','changeIdAcademico']),
    submit: async function(){
      console.log(this.getIdAcademico)
      if(this.decisionEvidencia === -1 || this.decisionCargo === -1 || this.descripcion === ""){
        alert('Complete todos los campos por favor')
      }else{
        this.changeFormView(false)
        const response = await AcademicoServices.getAcademico(this.getIdAcademico);
        this.academico = response.data
        switch (this.academico.tipoGrado){
          case 'TITULAR':
            this.academico.tipoGrado = 4;
            break;
          case 'ASISTENTE':
            this.academico.tipoGrado = 2;
            break;
          case 'ASOCIADO':
            this.academico.tipoGrado = 3;
            break;
          case 'INSTRUCTOR':
            this.academico.tipoGrado = 1;
            break;
          case 'AYUDANTE':
            this.academico.tipoGrado = 0;
            break;
        }
        switch (this.decisionCargo){
          case 0:
            this.academico.tipoGrado++;
            if(this.academico.tipoGrado > 4){
              alert('El academico tiene el rango maximo, no se puede ascender')
              return
            }else{
              AcademicoServices.updateAcademico(this.academico)
              alert('El cargo del academico fue actualizado')
            }
            break;
          case 1:
            alert('Se mantuvo el cargo del academico')
            break;
        }
        const tryDelete =await ComiteServices.deleteComite(this.academico.id);

        if(tryDelete.data){
          alert('Proceso finalizado con exito')
        }else {
          alert('Hubo un error en el procesamiento')
        }
        this.closeForm()
      }
    },
    closeForm(){
      this.changeFormView(false);
    }
  }

}
</script>

<style scoped>

</style>
