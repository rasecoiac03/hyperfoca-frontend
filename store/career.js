const state = () => ({
  jobs: [],
  job: [],
})

const getRandomInt = (min, max) => {
  const minRnd = Math.ceil(min)
  const maxRnd = Math.floor(max)
  return Math.floor(Math.random() * (maxRnd - minRnd)) + minRnd
}

const defaultSteps = [
  {
    description: 'Currículo',
    done: true,
  },
  {
    description: 'Quiz Hyperfoca',
    done: true,
  },
  {
    description: 'Excel Básico',
    current: true,
    done: false,
  },
  {
    description: 'Conversa com o Buddy',
    done: false,
  },
  {
    description: 'Experiência',
    done: false,
  },
  {
    description: 'Final',
    done: false,
  },
]

const actions = {
  async getJobs({ commit }) {
    const { data: jobs } = await this.$axios.get('/jobs')
    jobs.forEach(j => {
      const progress = getRandomInt(0, 100)
      Object.assign(j, { progress })
    })
    commit('setJobs', jobs)
  },

  async getJobById({ commit }, { id }) {
    const { data: job } = await this.$axios.get(`/jobs/${id}`)
    const progress = getRandomInt(0, 100)
    Object.assign(job, { steps: defaultSteps, progress })
    commit('setJob', job)
  },
}

const mutations =  {
  setJobs(state, jobs) {
    state.jobs = jobs
  },

  setJob(state, job) {
    state.job = job
  },
}

export default {
  state,
  actions,
  mutations,
  namespaced: true,
}