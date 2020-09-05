const state = () => ({
  jobs: [],
  job: [],
})

const actions = {
  getJobs({ commit }) {
    // FIXME
    commit('setJobs', [
      {
        id: 1,
        title: 'Auxiliar Admnistrativo',
        company: 'Faculdade SuperAção',
        location: 'Home Office - SP',
        logo: 'https://logo.clearbit.com/baremetrics.com',
        progress: 50,
      },
      {
        id: 2,
        title: 'Auxiliar Admnistrativo',
        company: 'Faculdade SuperAção',
        location: 'Home Office - SP',
        logo: '',
        progress: 20,
      },
    ])
  },

  getJobById({ commit }, { id }) {
    // FIXME
    commit('setJob', {
      id,
      title: 'Auxiliar Admnistrativo',
      company: 'Faculdade SuperAção',
      location: 'Home Office - SP',
      logo: 'https://logo.clearbit.com/baremetrics.com',
      progress: 50,
      steps: [
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
      ],
    })
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