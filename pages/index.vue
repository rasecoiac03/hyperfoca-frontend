<template>
  <main>
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="4" class="my-md-10">
          <img
            src="/home/video-player.svg"
            alt="A primeira plataforma online de seleção para Autistas"
            class="my-7 mx-auto d-block" />
        </v-col>

        <v-col cols="12" md="8">
          <h1 class="text-h4 text-md-h3 font-medium mb-4">A primeira plataforma online de seleção para Autistas</h1>
          <p class="text-body-1">
            Com um olhar cuidadoso para todas as etapas do processo seletivo, nosso objetivo é criar um ambiente
            de desenvolvimento profissional confortável, desde a sua cadidatura até o momento em que esteja
            trabalhando efetivamente.
          </p>

          <v-btn color="primary" class="my-7">
            Crie sua conta
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" md="4">
          <img
            src="/home/primeira-plataforma.svg"
            alt="Chega de entrevistas que mais parecem uma peça de teatro!"
            class="my-7 mx-auto d-block" />
        </v-col>

        <v-col cols="12" md="8" class="my-md-10">
          <h2 class="text-h4 text-md-h3 font-medium mb-4">Chega de entrevistas que mais parecem uma peça de teatro!</h2>
          <p class="text-body-1">
            Na hyperfoca vamos te selecionar por quem você realmente é e pelo que sabe fazer de verdade, não só pelo que você fala!
          </p>

          <v-btn color="primary" class="my-7">
            Crie sua conta
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" md="4">
          <img
            src="/home/feedbacks.svg"
            alt="Quem já passou por aqui"
            class="my-7 mx-auto d-block" />
        </v-col>

        <v-col cols="12" md="8" class="my-md-10">
          <h3 class="text-h4 text-md-h3 text-md-center font-medium mb-4">
            Quem já passou por aqui
          </h3>

          <v-carousel
            class="lp-carousel text-center"
            :show-arrows="false"
            height="auto"
            hide-delimiter-background>
            <v-carousel-item
              v-for="(item, i) in feedbacks"
              :key="i">
              <v-avatar size="252" class="d-block my-10 mx-auto">
                <img
                  :src="item.image"
                  :alt="item.from" >
              </v-avatar>

              <strong class="text-subtitle-1 font-weight-medium text--primary">{{ item.from }}</strong>
              <p class="text-body-2 text--primary">{{ item.text }}</p>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <section class="hyperfoca-light pa-10">
      <v-container class="text-center">
        <h4 class="text-h5 font-weight-bold">Ainda não se sente pronto para trabalhar?</h4>

        <v-btn color="primary my-5">
          Agende uma mentoria
        </v-btn>
      </v-container>
    </section>
  </main>
</template>

<script>
  export default {
    data: () => ({
      feedbacks: [
        {
          image: 'https://api.adorable.io/avatars/285/abott@adorable.png',
          from: 'Caio Cesar',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur, voluptatem eaque quas obcaecati minus quis blanditiis ipsa ipsam temporibus! Illo corporis dolores dolorem incidunt magni in molestias, quia error!',
        },
        {
          image: 'https://api.adorable.io/avatars/285/abott@cute.png',
          from: 'Priscila Ng',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur, voluptatem eaque quas obcaecati minus quis blanditiis ipsa ipsam temporibus! Illo corporis dolores dolorem incidunt magni in molestias, quia error!',
        },
      ]
    }),
  }
</script>

<style lang="scss">
.lp-carousel {
  .v-window__container {
    padding-bottom: 40px;
  }

  .v-carousel__controls__item {
    color: $color-primary !important;
  }
}
</style>