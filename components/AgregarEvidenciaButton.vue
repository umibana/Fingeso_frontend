<template>
  <v-dialog v-model="dialog" persistent>
    <template #activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Crear Compromiso</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h4">Agregar Evidencia</span>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-container>
          <v-row>
            <v-textarea
              label="Descripcion de la evidencia"
              maxlength="500"
              required
            ></v-textarea>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Cerrar
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
