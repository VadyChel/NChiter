export default {
  getServer ({ commit }, serverId) {},
  getServerChannels ({ commit }, serverId) {
    commit('setServerChannels', { serverId, channels: [ { id: '1', name: 'channel' }, { id: '2', name: 'channe2l' } ] })
  },
  getServerMembers ({ commit }, serverId) {
    commit('setServerMembers', { serverId, members: [ { id: '1', username: 'username' } ] })
  },
  createServer ({ commit }, server) {},
  editServer ({ commit }, newServer) {},
  editServerChannel ({ commit }, newChannel) {},
  createServerChannel ({ commit }, channel) {},
  getUserServers ({ commit }, userId) {
    commit('setUserServers', [ { id: '1', iconUrl: 'https://moonlist.xyz/icon.ico', name: 'Moonlist' } ])
    commit('setUserServersIsLoaded', true, { root: true })
  },
  setCurrentServer({ state, commit }, serverId) {
    if (state.currentServer?.id === serverId) {
      return
    }

    commit('setCurrentServer', { id: '1', iconUrl: 'https://moonlist.xyz/icon.ico', name: 'Moonlist' })
  },
  setCurrentChannel({ state, commit }, channelId) {
    if (state.currentChannel?.id === channelId) {
      return
    }

    commit('setCurrentChannel', { id: channelId, name: channelId })
  }
}
