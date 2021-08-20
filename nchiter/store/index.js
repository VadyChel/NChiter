import currentUser from './currentUser'
import servers from './servers'
import users from './users'

export const state = () => ({
  userServersIsLoaded: false,
  currentUserIsLoaded: false,
  userPrivateChannelsIsLoaded: false
})

export const mutations = {
  setUserServersIsLoaded (state, userServersIsLoaded) {
    state.userServersIsLoaded = userServersIsLoaded
  },
  setCurrentUserIsLoaded (state, currentUserIsLoaded) {
    state.currentUserIsLoaded = currentUserIsLoaded
  },
  setUserPrivateChannelsIsLoaded (state, userPrivateChannelsIsLoaded) {
    state.userPrivateChannelsIsLoaded = userPrivateChannelsIsLoaded
  }
}

export const actions = {
  loadApp ({ dispatch }) {
   dispatch('currentUser/getCurrentUser')
   dispatch('currentUser/getUserPrivateChannels')
   dispatch('servers/getUserServers')
  }
}

export const getters = {
  appIsLoaded: state => state.userServersIsLoaded && state.currentUserIsLoaded && state.userPrivateChannelsIsLoaded
}

export const modules = { currentUser, servers, users }
