/* eslint-disable no-console */
export const state = () => ({
  id: 3,
  token: null,
  username: null,
  phone: null,
  email: null,
  is_admin: false,
  hives: [
    {
      id: 'BEE0000000000000',
      name: 'Ruche Test',
      owner: 7
    },
    {
      id: 'B000000000000000',
      name: 'Super Ruche',
      owner: 7
    }
  ]
})

export const actions = {
  async fetchLogin ({ commit, dispatch }, _data) {
    await this.$axios({
      method: 'POST',
      url: '/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: _data
    }).then((res) => {
      this.token = res.data.content.token
      this.$router.push('/panel/welcome')
      dispatch('fetchInfo')
    }).catch((err) => {
      console.dir(err)
    })
  },
  async fetchInfo ({ commit }) {
    await this.$axios({
      method: 'GET',
      url: '/info',
      headers: {
        'X-Authorization': this.token,
        'Access-Control-Request-Origin': 'https://prc2022.lycee-lgm.fr'
      }
    }).then((res) => {
      this.id = res.data.content.id
      this.username = res.data.content.username
      this.email = res.data.content.email
      this.is_admin = res.data.content.is_admin
      this.phone = res.data.content.phone
      this.hives = res.data.content.hives
      commit('setUserInfo', res.data.content)
      console.log(res.data.content.username)
      console.log(this.username)
      console.log(this.email)
    }).catch((err) => {
      console.log(err.message)
    })
  },

  logout () {
    this.token = null
    this.$router.push('/auth/login')
  }
}

export const mutations = {
  setUserInfo (state, info) {
    state.id = info.id
    state.username = info.username
    state.email = info.email
    state.phone = info.phone
    state.is_admin = info.is_admin
    state.hives = info.hives
  }
}

export const getters = {
  getUserInfo (state) {
    return Object({
      username: state.username,
      phone: state.phone,
      id: state.id,
      email: state.email,
      is_admin: state.is_admin
    })
  },
  getUserHives (state) {
    return state.hives
  }
}
