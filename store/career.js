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
}

const mutations =  {
  setJobs(state, jobs) {
    state.jobs = jobs
  },
}

export default {
  state,
  actions,
  mutations,
  namespaced: true,
}