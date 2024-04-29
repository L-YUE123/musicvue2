import { getUserSUMApi, getUserInfoApi } from '@/api'

const UserInfo = {
  state: {
    musicSum: {},
    profile: {}
  },
  getters: {
  },
  mutations: {
    setMusicSum(state, payload) {
      state.musicSum = payload
    },
    setProfile(state, payload) {
      state.profile = payload
    }
  },
  actions: {
    async getUserInfo(context) {
      const userId = Number(localStorage.getItem('id'))
      console.log('获取用户信息')
      const res = await getUserSUMApi()
      context.commit('setMusicSum', res)
      const res1 = await getUserInfoApi(userId)
      context.commit('setProfile', {
        ...res1.profile,
        level: res1.level,
        listenSongs: res1.listenSongs
      })
      console.log('用户信息', state.profile)
    }
  },
  modules: {
  }
}

export default UserInfo
