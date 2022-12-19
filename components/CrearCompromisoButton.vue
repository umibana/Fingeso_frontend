<template>
  <v-dialog v-model="dialog" persistent>
    <template #activator="{ on, attrs }">
      <v-btn :to = "to" color="primary" dark v-bind="attrs" v-on="on">
        Crear Compromiso</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h4">Creación de compromiso</span>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-container>
          <v-row>
            <v-col cols="12" sm="9" md="9">
              <v-textarea
                v-model="descripcion"
                label="Descripción del compromiso a realizar"
                solo
                maxlength="500"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="3">
              <v-select
                v-model="tipo"
                :items="items"
                label="Categoría"
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Cerrar
        </v-btn>
        <v-btn
          type="submit"
          color="blue darken-1"
          text
          @click="
            createCompromiso()
            dialog = false
          "
        >
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from "vuex";
export default {
  data: () => ({
    select: { text: 'Docencia', value: 0 },
    items: [
      { text: 'Docencia', value: 0 },
      { text: 'Investigación', value: 1 },
      { text: 'Vinculación con el medio', value: 2 },
    ],
    dialog: false,
    descripcion: '',
    tipo: 0,
    to: '/compromisos'
  }),
  computed:{
    ...mapGetters('sesion',['getIdUser','getType','getInfo','getView'])
  },created() {
  },
  methods: {
    ...mapActions('sesion', ['setState','changeView']),
    createCompromiso: function () {
      const compromisoPost = {
        descripcion: this.descripcion,
        tipo: this.tipo,
      }
      axios.post('/compromisos', compromisoPost).then((result) => {
        alert("Compromiso creado con exito")
      })
    },
  },
}
</script>
