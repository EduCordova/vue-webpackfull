<template>
  <div >
 <v-app>
    <v-app toolbar footer>

      <v-navigation-drawer 
      dark
      persistent
       overflow
      v-model="drawer"
      enable-resize-watcher
      >

        <v-toolbar flat class="transparent">
          <v-list class="pt-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://qph.ec.quoracdn.net/main-qimg-d5aa790ac72d8bf10643e2139624f16c" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Edu Cordova</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

        </v-toolbar> 
        <v-divider></v-divider>
        <v-list class="pt-0" dense v-for="(datos,index) in rutas">

          <router-link :to="datos.ruta" tag="li">

            <v-list-tile ripple @click="">
              <v-list-tile-action class="grey--text">
                <i :class="datos.icon"></i>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="datos.name"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>

      </v-navigation-drawer>

      <v-toolbar class="indigo" dark fixed>
        <v-toolbar-side-icon @click.stop="drawer = !drawer">
          <i class="fa fa-bars fa-1x"></i>
        </v-toolbar-side-icon>
        <v-toolbar-title>PetShelter</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon class="white--text">
          <i class="fa fa-github fa-2x" ></i>
        </v-btn>
      </v-toolbar>

      <main id="app">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>

      <v-footer class="indigo">
        <span class="white--text">&copy; 2017</span>
      </v-footer>
    </v-app>
  </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      msg: 'PETSHELTER',
      rutas: [
        { name: "Home", icon: "fa fa-home fa-2x ", ruta: "/" },
        { name: "Adopta", icon: "fa fa-paw fa-2x", ruta: "/adopcion" },

      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
