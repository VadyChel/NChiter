<template>
  <v-app dark>
      <div style="height: 100vh; width: 100%; display: inline-flex">
        <div class="servers-nav">
          <nuxt-link to="/app/users/@me" class="server-container">
            <v-icon size="48px" color="#95b7c7">mdi-home</v-icon>
          </nuxt-link>
          <span class="home-divider"></span>
          <div v-for="server of servers" :key="server.id">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <nuxt-link
                  :to="`/app/servers/${server.id}`"
                  class="server-container"
                  v-on="on"
                  v-bind="attrs"
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
        <div class="content-block">
          <div class="d-flex channels-block flex-column">
            <div class="channels-header">
              <span>{{ currentServer }}</span>
            </div>
            <div class="channels-content"></div>
          </div>
          <div class="d-flex chat-block flex-column">
            <div class="chat-header">
              <span>{{ currentChat }}</span>
            </div>
            <div class="chat-content">
              <v-main>
                <v-container>
                  <Nuxt />
                </v-container>
              </v-main>
            </div>
          </div>
        </div>
      </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "main",
  computed: {
    ...mapGetters({
      currentChat: 'currentUser/currentChat',
      currentServer: 'currentUser/currentServer',
      servers: 'currentUser/currentServers'
    })
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
  transition: 0.1s;
}

.server-container:hover{
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

.content-block {
  flex-grow: 1;
  display: inline-flex;
  background-color: var(--lighter-gray-blue);
}

.channels-block {
  width: 20%;
  background-color: var(--lighter-gray-blue);
}

.channels-header {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 48px;
  width: 100%;
  border-bottom: 2px var(--shadow-color) solid;
}

.channels-content {
  width: 100%;
  flex-grow: 1;
}

.chat-block {
  width: 80%;
  background-color: var(--gray-blue);
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 48px;
  width: 100%;
  border-bottom: 2px var(--shadow-color) solid;
}

.chat-content {
  flex-grow: 1;
}
</style>
