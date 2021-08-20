export default {
  getUserPrivateChannels ({ commit }, userId) {
    commit('setUserPrivateChannels', [ { id: '1', username: '1sgasgsgs', avatarUrl: 'https://moonlist.xyz/icon.ico' }, { id: '2', username: 'username', avatarUrl: 'https://moonlist.xyz/icon.ico' } ])
    commit('setUserPrivateChannelsIsLoaded', true, { root: true })
  },
  getCurrentUser ({ commit }, userId) {
    commit('setCurrentUserIsLoaded', true, { root: true })
  }
}
