const state = () => ({
  user: null,
})

const actions = {
  async login({ commit }, data) {
    const { password, email } = data

    return new Promise(async (resolve, reject) => {
      try {
        const { data: user } = await this.$axios.get('/users', { params: { email } })
        if (password !== user.password) {
          reject('Oops, senha inválida :(')
        } else {
          const { email, name } = user
          commit('setUser', { email, name })
          resolve()
        }
      } catch (err) {
        reject('Oops, o email não está cadastrado!')
      }
    })
  },

  async singup(_, data) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.$axios.post('/users', data)
        resolve('Usuário criado com sucesso!')
      } catch (err) {
        if (err.response.status == 409) {
          reject('Já existe usuário com esse email')
        } else {
          reject('Oops, aconteceu algo inesperado')
        }
      }
    })
  },

  logout({ commit }) {
    commit('setUser', null)
  },
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export default {
  state,
  actions,
  mutations,
  namespaced: true,
}