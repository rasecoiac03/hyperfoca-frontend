<template>
  <v-container>
    <header class="text-center my-10">
      <v-avatar size="112" class="mb-10 mx-auto" color="hyperfoca-light">
        <img
          :src="user.image"
          :alt="user.name"
          v-if="user.image">

        <span class="primary--text headline" v-else>
          {{ userInitials }}
        </span>
      </v-avatar>

      <h4 class="text-h5">Olá, {{ user.name }}</h4>
    </header>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="(item, index) in menu"
        :key="index">
        <v-card :to="item.path" height="100%" nuxt>
          <v-card-text class="text-h6 text-center font-weight-bold primary--text">
            <img class="d-block mb-3 mx-auto" :src="item.icon" v-if="item.icon" />
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',

  data: () => ({
    menu: [
      {
        icon: '/my-account/vagas.svg',
        path: '/my-career',
        text: 'Minhas Vagas',
      },
      {
        icon: '/my-account/oportunidades.svg',
        path: '/',
        text: 'Oportunidades',
      },
      {
        icon: '/my-account/quiz.svg',
        path: '/',
        text: 'Quiz Hyperfoca',
      },
      {
        icon: '/my-account/curriculo.svg',
        path: '/',
        text: 'Meu Currículo',
      },
      {
        icon: '/my-account/desafios.svg',
        path: '/',
        text: 'Desafios Técnicos',
      },
      {
        icon: '/my-account/mentoria.svg',
        path: '/',
        text: 'Agendar Mentoria',
      },
    ],
  }),

  computed: {
    user() {
      return this.$auth.user
    },

    userInitials() {
      return this.user.name.split(' ').map(([initial])=> initial).join('')
    },
  },
}
</script>