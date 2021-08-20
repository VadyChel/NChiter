<template>
<div>
  22rafaf
</div>
</template>

<script>
export default {
  name: "ChannelPage",
  layout: 'servers',
  computed: {
    serverId () {
      return this.$route.params.serverId
    },
    channelId () {
      return this.$route.params.channelId
    }
  },
  mounted () {
    this.$store.dispatch('servers/setCurrentChannel', this.channelId)

    let channelsIds = this.$storage.getLocalStorage('lastServersChannelId')
    if (!channelsIds) {
      channelsIds = {}
    }

    channelsIds[this.serverId] = this.channelId
    this.$storage.setLocalStorage('lastServersChannelId', channelsIds)
  }
}
</script>

<style scoped>

</style>
