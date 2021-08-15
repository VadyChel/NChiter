export default {
  setCurrentChat: (state, chatName) => {
    state.currentChat = chatName
  },
  setCurrentServer: (state, serverName) => {
    state.currentServer = serverName
  },
  setCurrentServers: (state, servers) => {
    state.currentServers = servers
  }
}
