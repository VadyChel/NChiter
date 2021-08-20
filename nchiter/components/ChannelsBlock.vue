<template>
  <div class="d-flex channels-block flex-column">
    <div class="channels-header">
      <span>{{ currentServer.name }}</span>
    </div>
    <div class="channels-content pa-2">
      <nuxt-link
        v-for="channel of serverChannels"
        :key="channel.id"
        :to="`/app/servers/${serverId}/${channel.id}`"
        :class="{'channel-container': true, 'channel-container-active': channel.id === channelId}"
      >
        {{ channel.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "ServersLayoutChannelsBlock",
  computed: {
    serverId () {
      return this.$route.params.serverId
    },
    channelId () {
      return this.$route.params.channelId
    },
    serverChannels () {
      return this.getServerChannels(this.serverId)
    },
    ...mapGetters({
      currentServer: 'servers/currentServer',
      getServerChannels: 'servers/serverChannels'
    })
  }
}
</script>

<style scoped>
.channel-container {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: var(--gray-blue);
  border-radius: 3px;
  transition: 0.1s;
  color: #fff;
  margin-bottom: 4px;
}

.channel-container-active, .channel-container:hover {
  background-color: var(--dark-grey-blue);
}

</style>
