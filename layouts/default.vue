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
        <template v-if="!user">
          <v-list-item class="d-inline-block">
            <v-list-item-content>
              <v-btn color="primary" class="default-color" to="/login" nuxt-link>
                Entrar
              </v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/singup">
            <v-list-item-content>
              <v-list-item-title class="hyperfoca-dark--text font-weight-medium">Fazer cadastro</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item class="d-inline-block">
            <v-list-item-content>
              <v-btn color="primary" class="default-color" @click="logout">
                Sair
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-list-item v-for="(item, index) in menu" :key="index" :to="item.path" nuxt-link>
          <v-list-item-content>
            <v-list-item-title class="hyperfoca-dark--text font-weight-medium">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="hyperfoca-light" flat app hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="primary"></v-app-bar-nav-icon>
      <nuxt-link to="/" class="ma-auto">
        <img src="/logo.svg" class="app-bar__img" />
      </nuxt-link>

      <template v-if="user">
        <v-btn color="primary" icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn color="primary" to="/my-account" icon nuxt-link>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer color="primary" class="mt-10">
      <v-row align="center" no-gutters>
        <v-col cols="12" md="7" class="social__container">
          <p class="text-body-2 hyperfoca-light--text d-md-inline">Acompanhe nossas redes sociais:</p>

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
            <p class="text-body-2 hyperfoca-light--text mt-10 mr-3 mt-md-0 mb-md-0">Assine nossa newsletter:</p>

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
import { mapState } from 'vuex'

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
    menu: [
      {
        text: 'Ir para o Blog',
      },
      {
        text: 'Agendar Mentoria',
      },
      {
        text: 'Quero Recrutar',
      },
    ],
    email: '',
  }),

  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },

  mounted() {
    this.$nextTick(() => {
      this.drawer = false
    })
  },

  methods: {
    newsletter() {
      console.log(this.email)
    },

    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
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
