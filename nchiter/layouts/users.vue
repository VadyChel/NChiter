<template>
  <v-app dark>
    <div class="page">
      <loading-screen v-if="!appIsLoaded"/>
      <div style="height: 100vh; width: 100%; display: inline-flex" v-if="appIsLoaded">
        <user-servers-sidebar />
        <div class="content-block">
          <private-channels-block />
          <div class="d-flex chat-block flex-column">
            <div class="chat-header">
              <span>{{ currentPrivateChannel }}</span>
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
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "UsersLayout",
  middleware: 'currentUrl',
  computed: {
    ...mapGetters({
      currentPrivateChannel: 'currentUser/currentPrivateChannel'
    }),
    ...mapGetters(['appIsLoaded'])
  },
  mounted () {
    this.$store.dispatch('loadApp')
  }
}
</script>

<style scoped>
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
  padding: 10px;
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
