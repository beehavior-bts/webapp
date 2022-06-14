/* eslint-disable no-console */
export const state = () => ({
  id: 0,
  token: null,
  username: null,
  phone: null,
  email: null,
  is_admin: false,
  hives: []
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
      window.localStorage.setItem('beehavior-token', res.data.content.token)
      this.$router.push('/panel/welcome')
      dispatch('fetchInfo')
    }).catch((err) => {
      console.dir(err)
    })
  },
  async fetchInfo ({ commit }) {
    if (window.localStorage.getItem('beehavior-token') === null) {
      this.$router.push('/auth/login')
    }
    await this.$axios({
      method: 'GET',
      url: '/info',
      headers: {
        'X-Authorization': window.localStorage.getItem('beehavior-token'),
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
    }).catch((_) => {
      /* console.log(err.message)
      this.$router.push('/auth/login') */
    })
  },

  async applyNewSettings ({ commit, dispatch }, _data) {
    const _params = new URLSearchParams()
    _params.append('username', _data.username)
    _params.append('email', _data.email)
    _params.append('phone', _data.phone)
    await this.$axios.put('/account', _params, {
      headers: {
        'X-Authorization': window.localStorage.getItem('beehavior-token'),
        'Access-Control-Request-Origin': 'https://prc2022.lycee-lgm.fr'
      }
    }).then((res) => {
      dispatch('fetchInfo')
    }).catch((err) => {
      console.log('error happened on func applyNewSetting : ' + err.message)
    })
  },

  logout () {
    this.token = null
    window.localStorage.removeItem('beehavior-token')
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
  },
  setBaseUserInfo (state, info) {
    state.username = info.username
    state.email = info.email
    state.phone = info.phone
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
