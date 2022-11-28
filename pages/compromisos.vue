<template>
  <v-row justify="center" align="center">
    <CompromisoDatos v-for="(compromiso, i) in compromisoArray" :key="i">
    </CompromisoDatos>
    <v-col cols="12">
      <CrearCompromisoButton> </CrearCompromisoButton>
    </v-col>
  </v-row>
</template>

<!-- Esto despues debera leer del backend -->
<script>
export default {
  data: () => ({
    compromisoArray: [
      {
        icon: 'mdi-inbox',
        text: 'Inbox',
      },
      {
        icon: 'mdi-star',
        text: 'Star',
      },
      {
        icon: 'mdi-send',
        text: 'Send',
      },
      {
        icon: 'mdi-email-open',
        text: 'Drafts',
      },
    ],
    model: 1,
  }),
  name: 'CompromisosPage',
}
</script>
