<template>
  <v-container>
    <header class="my-10">
      <v-row>
        <div class="col">
          <h4 class="text-h5">{{job.title}}</h4>
          <p class="text-body-1">{{job.company}}</p>

          <template v-if="seeDetails">
            <v-list-item-subtitle v-text="job.location"></v-list-item-subtitle>
          </template>
        </div>

        <v-btn class="col col-auto" color="blue" text @click="toggleDetails">
          {{seeDetails ? 'Esconder' : 'Ver'}} detalhes
        </v-btn>
      </v-row>
    </header>

    <v-row>
      <p class="text-body-2 mb-0 col">Evolução na jornada</p>
      <p class="text-body-2 mb-0 col col-auto">{{evolution}}</p>
    </v-row>

    <v-progress-linear
      :value="job.progress"
      :background-opacity="0.2"
      height="16"
      rounded
      striped
      color="primary"
      class="mb-10" />

    <v-list>
      <v-card class="mb-5" v-for="(item, index) in job.steps" :key="index">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar :color="(item.done || item.current) ? 'blue' : 'grey'" class="white--text">
              {{index + 1}}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.description" />
          </v-list-item-content>

          <v-list-item-icon v-if="item.done">
            <v-icon color="green">mdi-check-circle</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-card>
    </v-list>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',

  async fetch() {
    await this.$store.dispatch('career/getJobById', this.$route.params)
  },

  data: () => ({
    seeDetails: false,
  }),

  computed: {
    ...mapState({
      job: state => state.career.job,
    }),

    evolution() {
      const { steps, steps: { length } } = this.job
      const current = (steps.findIndex(item => item.current)) + 1

      return `${current}/${length}`
    },
  },

  methods: {
    toggleDetails () {
      this.seeDetails = !this.seeDetails
    },
  },
}
</script>