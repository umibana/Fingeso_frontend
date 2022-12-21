<template>
  <v-app light class="back">
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
<!--      <v-btn class="pl-3" icon @click.stop="miniVariant = !miniVariant">-->
<!--        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>-->
<!--      </v-btn>-->
      <!-- <v-btn icon @click.stop="clipped = !clipped"> -->
      <!--   <v-icon>mdi-application</v-icon> -->
      <!-- </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed"> -->
      <!--   <v-icon>mdi-minus</v-icon> -->
      <!-- </v-btn> -->
      <!-- <v-toolbar-title>{{ title }}</v-toolbar-title> -->

      <v-spacer />
      <v-btn
        v-for="(item, i) in this.filterButtons"
        :key="i"
        :to="item.to"
        color="#EC8325"
        router
        exact
        class="ma-6"
      >
        {{ item.title }}
      </v-btn>
      <v-spacer />
        <v-avatar color="#EC8325" @click="changePrueba()" style="cursor: pointer">
          <span class="lighten-1">{{getInfo.name.charAt(0)}}</span>
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
        <v-card v-if="prueba===1" class="modal" color="#00447C">
          <v-card-title>¿Deseas cerrar sesión?</v-card-title>
          <v-btn @click="prueba = 0" style="margin-top: 10px" light>Close</v-btn>
          <v-btn @click="cerrarSesion" style="margin-top: 10px" color="#EC8325">Cerrar sesión</v-btn>
        </v-card>
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
    <v-footer :absolute="!fixed" dark app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
  name: 'DefaultLayout',
  components: {},

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Inicio',
          to: '/inicio',
          permisos: ['ACADEMICO','DECANO']
        },
        {
          icon: 'mdi-apps',
          title: 'Compromisos',
          to: '/compromisos',
          permisos: ['ACADEMICO']
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Evaluaciones',
          to: '/evaluaciones',
          permisos: ['ACADEMICO','DECANO']
        },
      ],
      title: 'Vuetify.js',
      username: 'DIINF USACH',
      prueba: 0,
    }

  },
  created() {
    this.toInit()
    },
  computed:{
    ...mapGetters('sesion',['getIdUser','getType','getInfo']),
    filterButtons(){
      const lista = []
      for (let i = 0; i < this.items.length; i++) {
        for (let j = 0; j < this.items[i].permisos.length; j++) {
          if(this.getType === this.items[i].permisos[j]){
            lista.push(this.items[i])
          }
        }
      }
      return lista;
    }
  },methods: {
    ...mapActions('sesion',['setState']),
    toInit(){
      this.$router.replace('/inicio')
    },
    changePrueba(){
      this.prueba = 1;
    },
    cerrarSesion(){
      location.replace("http://localhost:3000")
    }
  }
}
</script>

<style scoped>
.back {
  background-color: #e3e3e3;
}
.modal {
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 400px;
  min-height: 200px;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>
