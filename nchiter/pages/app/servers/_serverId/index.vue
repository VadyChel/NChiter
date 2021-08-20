<template>
<div></div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "ServerPage",
  layout: 'servers',
  computed: {
    serverId () {
      return this.$route.params.serverId
    },
    serverChannels () {
      return this.getServerChannels(this.serverId)
    },
    lastServerChannelId () {
      const channelsIds = this.$storage.getLocalStorage('lastServersChannelId')
      return channelsIds ? channelsIds[this.serverId] : (this.serverChannels.length > 0 ? this.serverChannels[0].id : null)
    },
    ...mapGetters({ getServerChannels: 'servers/serverChannels' })
  },
  mounted () {
    this.$store.dispatch('servers/setCurrentServer', this.serverId)

    if (this.lastServerChannelId) {
      this.$router.push({ path: `/app/servers/${this.serverId}/${this.lastServerChannelId}` })
    }
  }
}
</script>

<style scoped>

</style>
