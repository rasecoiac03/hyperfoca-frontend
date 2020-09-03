<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="indigo lighten-5"
    >
      <v-list-item-title class="title" color="#003366">
        Menu
      </v-list-item-title>
      <hr />
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-btn small color="#E6E7F2" class="default-color">Entrar</v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Fazer cadastro</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Ir pra o Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Agendar Mentoria</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Quero Recrutar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo lighten-5"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#003366"></v-app-bar-nav-icon>
      <img src="/logo.svg" class="app-bar__img" />
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      color="#003366"
      app
    >
      <h3 class="default-color">Acompanhe nossas redes sociais:</h3>
      <h3 class="default-color">Assine nossa newsletter:</h3>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
.app-bar{
  &__img {
    display: block;
    margin: 0 auto;
  }
}

.default-color {
  color: #E6E7F2;
}
</style>