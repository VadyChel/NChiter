export default {
  setCurrentPrivateChannel (state, channelId) {
    state.currentPrivateChannel = state.userPrivateChannels.find(channel => channel.id === channelId)?.username
  },
  setUserPrivateChannels (state, channels) {
    state.userPrivateChannels = channels
  }
}
