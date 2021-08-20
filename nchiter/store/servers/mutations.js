export default {
  setUserServers (state, servers) {
    state.userServers = servers
  },
  setServerChannels (state, channels) {
    state.serversChannels.push(channels)
  },
  setServerMembers (state, members) {
    state.serversMembers.push(members)
  },
  setCurrentChannel (state, channelName) {
    state.currentChannel = channelName
  },
  setCurrentServer (state, serverName) {
    state.currentServer = serverName
  },
}
