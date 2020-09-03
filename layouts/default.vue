<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="main-menu hyperfoca-light" app>
      <v-list-item-title class="title hyperfoca-dark--text">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon color="primary" small>mdi-close</v-icon>
        </v-btn>
        Menu
      </v-list-item-title>

      <v-divider dark />

      <v-list>
        <v-list-item class="d-inline-block">
          <v-list-item-content>
            <v-btn color="primary" class="default-color" href="/login">
              Entrar
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="hyperfoca-dark--text font-weight-medium">Fazer cadastro</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="hyperfoca-dark--text font-weight-medium">Ir prao Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="hyperfoca-dark--text font-weight-medium">Agendar Mentoria</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="hyperfoca-dark--text font-weight-medium">Quero Recrutar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="hyperfoca-light" flat app hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="primary"></v-app-bar-nav-icon>
      <img src="/logo.svg" class="app-bar__img ma-auto" />
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer color="primary">
      <v-row align="center" no-gutters>
        <v-col cols="12" md="7" class="social__container">
          <p class="hyperfoca-light--text d-md-inline">Acompanhe nossas redes sociais:</p>

          <v-btn
            v-for="item in socialMedia"
            :key="item.text"
            :href="item.url"
            color="hyperfoca-light"
            class="social__button"
            text small>
            <v-icon color="hyperfoca-light" left>mdi-{{ item.text }}</v-icon>
            {{ item.text }}
          </v-btn>
        </v-col>

        <v-col cols="12" md="5">
          <v-row align="center" no-gutters>
            <p class="hyperfoca-light--text mt-10 mr-3 mt-md-0 mb-md-0">Assine nossa newsletter:</p>

            <v-text-field
              type="email"
              label="Qual é o seu email?"
              v-model="email"
              hide-details
              solo>
              <template slot="append">
                <v-btn @click="newsletter" color="info" depressed>
                  Enviar
                </v-btn>
              </template>
            </v-text-field>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
    socialMedia: [
      {
        text: 'instagram',
        url: '/',
      },
      {
        text: 'facebook',
        url: '/',
      },
      {
        text: 'linkedin',
        url: '/',
      },
    ],
    email: '',
  }),

  mounted() {
    this.$nextTick(() => {
      this.drawer = false
    })
  },

  methods: {
    newsletter() {
      console.log(this.email)
    },
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

img {
  max-width: 100%;
}

.main-menu {
  .title {
    line-height: 63px !important;
  }
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .social {
    &__container {
      text-align: center;

      .social__button {
        &.v-btn.v-size--small {
          height: auto;
        }

        .v-btn__content {
          flex-direction: column;

          i {
            margin: 0 0 4px;
          }
        }
      }
    }
  }
}
</style>