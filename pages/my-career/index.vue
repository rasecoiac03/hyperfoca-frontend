<template>
  <v-container>
    <header class="text-center my-10">
      <img src="/my-account/vagas.svg">
      <h4 class="text-h5">Minhas Vagas</h4>
    </header>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="(item, index) in jobs"
        :key="index">
        <v-card :to="`/my-career/${item.id}`" nuxt>
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="80"
              color="hyperfoca-light">
              <img :src="item.logo" v-if="item.logo">

              <span class="primary--text headline" v-else>
                {{ getInitials(item.company) }}
              </span>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-subtitle-1">{{item.title}}</v-list-item-title>
              <v-list-item-subtitle>{{item.company}}</v-list-item-subtitle>
              <v-list-item-subtitle class="text-caption">{{item.location}}</v-list-item-subtitle>

              <v-progress-linear
                :value="item.progress"
                :background-opacity="0.2"
                rounded
                striped
                color="primary"
                class="mt-3" />
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('career/getJobs')
  },

  computed: {
    ...mapState({
      jobs: state => state.career.jobs,
      user: state => state.auth.user,
    }),
  },

  mounted() {
    if (!this.user) {
      this.$router.push('/login')
    }
  },

  methods: {
    getInitials (value) {
      return value.split(' ').map(([initial])=> initial).join('')
    },
  },
}
</script>