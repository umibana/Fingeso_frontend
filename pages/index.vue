<template>
  <v-app light class="login">
    <v-container fluid fill-height class="blurBG">
      <v-layout align-center>
        <v-flex md6 offset-md3>
          <v-card elevation="4" class="blurCard" tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h1 class="headline">SED USACH</h1>
                <v-img
                  lazy-src="/logoUsach.png"
                  max-height="150"
                  max-width="250"
                  src="/logoUsach.png"
                ></v-img>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Porfavor ingrese sus datos de acceso</p>
              <v-form>
                <v-text-field
                  v-model="formValues.mail"
                  outline
                  label="Email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="formValues.pass"
                  outline
                  hide-details
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <!-- Editar estas acciones una vez backend sea implementado -->
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
              <v-btn color="info"> ¿Olvidaste tu contraseña? </v-btn>
              <v-spacer></v-spacer>
              <v-btn v-on:click="loginHandler"  color="info" :large="$vuetify.breakpoint.smAndUp">
                <v-icon left> :=:</v-icon>
                Ingresar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>
.login {
  background-image: url('/diinf.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.blurBG {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.blurCard {
  opacity: 95%;
}
</style>

<script>
import UserServices from "~/services/UserServices";
import AcademicoServices from "~/services/AcademicoServices";
export default {
  name: 'IndexPage',
  layout: 'empty',
  data(){
    return{
      users: [],
      academico:'',
      formValues: {
        pass: '',
        mail: ''
      }
    }
  },
  created() {
    this.getUsersHandler()
  },
  methods:{
    async getUsersHandler(){
      const response = await UserServices.getUsers()
      this.users = response.data
      console.log(this.users[0].pass)
    },
    async loginHandler(){
      if (this.formValues.mail === '' || this.formValues.pass === ''){
        alert("Complete todos los campos por favor")
      }else {
        const response = await UserServices.matchUser(this.formValues);
        console.log(response.data);
        switch (response.data) {
          case 0:
            alert("Usuario no encontrado")
            break
          case -1:
            alert("Contraseña incorrecta")
            break
          default:
            // location.href='compromisos'
            this.academico =await AcademicoServices.getAcademico(response.data)
            console.log(this.academico.data)
            break

        }
      }
    }
  }
}
</script>
