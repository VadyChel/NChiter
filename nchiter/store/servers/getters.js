export default {
  userServers: state => state.userServers,
  serverChannels: state => serverId => state.serversChannels.find(
    serverChannels => serverChannels.serverId === serverId
  )?.channels,
  serverMembers: state => serverId => state.serversMembers.find(
    serverMembers => serverMembers.serverId === serverId
  )?.members,
  currentChannel: state => state.currentChannel,
  currentServer: state => state.currentServer,
}
