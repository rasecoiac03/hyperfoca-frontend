<template>
  <header class="pa-7 text-center">
    <img src="/logo-foca.svg" class="logo mx-auto d-block" />
    <h4 class="text-h6 my-5">{{ title }}</h4>

    <v-btn
      color="primary"
      class="mb-3 mb-sm-0 mr-sm-3"
      outlined
      rounded
      @click="loginWithGoogle">
      Com o Google
      <v-icon right>mdi-google</v-icon>
    </v-btn>

    <v-btn
      color="primary"
      outlined
      rounded
      @click="loginWithLinkedin">
      Com o Linkedin
      <v-icon right>mdi-linkedin</v-icon>
    </v-btn>

    <strong class="text-h6 my-5 d-block">ou</strong>
  </header>
</template>

<script>
export default {
  props: {
    title: { type: String },
  },
  methods: {
    loginWithGoogle() {
      console.log('google!')
    },

    loginWithLinkedin() {
      console.log('linkedin!')
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 240px;
}
</style>