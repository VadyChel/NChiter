<template>
  <div class="servers-nav">
    <home-button />
    <span class="home-divider"></span>
    <div v-for="server of userServers" :key="server.id">
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <nuxt-link
            :to="`/app/servers/${server.id}`"
            :class="{'server-container': true, 'server-container-active': serverId === server.id}"
            v-bind="attrs"
            v-on="on"
          >
            <img class="server-image" :src="server.iconUrl" alt="" width="48px">
          </nuxt-link>
        </template>
        <span>{{ server.name }}</span>
      </v-tooltip>
    </div>
    <div class="server-container">
      <v-icon size="48px" color="#95b7c7">mdi-plus</v-icon>
    </div>
  </div>

</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "UserServersSidebar",
  computed: {
    serverId () {
      return this.$route.params.serverId
    },
    ...mapGetters({ userServers: 'servers/userServers' })
  }
}
</script>

<style scoped>
.servers-nav {
  background-color: var(--gray-blue);
  width: 64px;
  padding: 4px;
}

.server-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 4px;
  transition: 0.1s;
}

.server-container:hover, .server-container-active{
  background-color: #3a4a4e;
}

.home-divider {
  border-radius: 5px;
  width: 48px;
  margin: 6px 4px;
  height: 5px;
  background-color: #a6a6a6;
  display: flex;
}
</style>
