/* eslint-disable require-await */
import axios from 'axios'


export const api = {
  async getServer (serverId) {
    return axios({
      method: 'GET',
      url: `/servers/${serverId}`
    })
  },
  async getUser (userId) {
    return axios({
      method: 'GET',
      url: `/users/${userId}`
    })
  },
  async getMember (serverId, userId) {
    return axios({
      method: 'GET',
      url: `/servers/${serverId}/members/${userId}`
    })
  },
  async getChannel (channelId) {
    return axios({
      method: 'GET',
      url: `/channels/${channelId}`
    })
  },
  async getServerChannels (serverId) {
    return axios({
      method: 'GET',
      url: `/servers/${serverId}/channels`
    })
  },
  async getServerMembers (serverId) {
    return axios({
      method: 'GET',
      url: `/servers/${serverId}/members`
    })
  },
  async getUserPrivateChannels (userId) {
    return axios({
      method: 'GET',
      url: `/users/${userId}/privateChannels`
    })
  },
  async createServer (server) {

  },
  async editServer (server) {

  },
  async createChannel (channel) {

  },
  async editChannel (channel) {

  },
  async getUserServers (userId) {

  },
}
