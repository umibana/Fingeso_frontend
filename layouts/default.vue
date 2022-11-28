<template>
  <v-app light>
    <!-- <v-navigation-drawer -->
    <!--   v-model="drawer" -->
    <!--   :mini-variant="miniVariant" -->
    <!--   :clipped="clipped" -->
    <!--   fixed -->
    <!--   app -->
    <!-- > -->
    <!-- </v-navigation-drawer> -->
    <v-app-bar class="rounded-pill mt-3 ml-6 mr-6" dark fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <!--  Dejar este chevron como ir hacia atras! -->
      <v-btn class="pl-3" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped"> -->
      <!--   <v-icon>mdi-application</v-icon> -->
      <!-- </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed"> -->
      <!--   <v-icon>mdi-minus</v-icon> -->
      <!-- </v-btn> -->
      <!-- <v-toolbar-title>{{ title }}</v-toolbar-title> -->

      <v-spacer />
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        light
        router
        exact
        class="ma-6"
      >
        {{ item.title }}
      </v-btn>
      <v-spacer />
      <v-avatar color="white">
        <span class="black--text">H.V</span>
      </v-avatar>

      <!-- <v-btn light :to="items[1].to"> Mis Compromisos </v-btn> -->
      <!-- <v-btn light :to="items[2].to"> Evaluaciones Asignadas</v-btn> -->
      <!-- <v-toolbar-title class="pr-3">{{ username }}</v-toolbar-title> -->
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer"> -->
      <!--   <v-icon>mdi-menu</v-icon> -->
      <!-- </v-btn> -->
    </v-app-bar>
    <v-main class="mt-3">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed> -->
    <!--   <v-list> -->
    <!--     <v-list-item @click.native="right = !right"> -->
    <!--       <v-list-item-action> -->
    <!--         <v-icon light> mdi-repeat </v-icon> -->
    <!--       </v-list-item-action> -->
    <!--       <v-list-item-title>Switch drawer (click me)</v-list-item-title> -->
    <!--     </v-list-item> -->
    <!--   </v-list> -->
    <!-- </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Inicio',
          to: '/index',
        },
        {
          icon: 'mdi-apps',
          title: 'Compromisos',
          to: '/compromisos',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Evaluaciones',
          to: '/inspire',
        },
      ],
      title: 'Vuetify.js',
      username: 'DIINF USACH',
    }
  },
}
</script>
