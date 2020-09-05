<template>
  <v-row align="center" class="text-center error__container">
    <v-container>
      <h2 class="mb-3">Oops, aconteceu algo que a gente não estava esperando :(</h2>
      <v-btn to="/" color="primary" text nuxt-link>
        Ir para a home
      </v-btn>
    </v-container>
  </v-row>
</template>

<style lang="scss" scoped>
.error__container {
  height: 100%;
}
</style>