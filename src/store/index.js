import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    user: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    // 模拟登录
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        if (username === 'admin' && password === '123456') {
          const token = 'admin-token'
          const user = {
            name: 'admin',
            avatar: '',
            roles: ['admin']
          }
          commit('SET_TOKEN', token)
          commit('SET_USER', user)
          setToken(token)
          resolve()
        } else {
          reject(new Error('用户名或密码错误'))
        }
      })
    },
    // 登出
    logout({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_USER', null)
        removeToken()
        resolve()
      })
    }
  }
}) 