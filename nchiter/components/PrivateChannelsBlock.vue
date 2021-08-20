<template>
  <div class="d-flex channels-block flex-column">
    <div class="channels-header">
      <span>afaf</span>
    </div>
    <div class="channels-content pa-2">
      <nuxt-link
        v-for="channel of userPrivateChannels"
        :key="channel.id"
        :to="`/app/users/${channel.id}`"
        :class="{'chat-container': true, 'chat-container-active': channel.id === userId}"
      >
        <img :src="channel.avatarUrl" alt="" width="48px" class="chat-image">
        <span class="chat-username">{{ channel.username }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "UsersLayoutChannelsBlock",
  computed: {
    userId () {
      return this.$route.params.userId
    },
    ...mapGetters({userPrivateChannels: 'currentUser/userPrivateChannels'})
  }
}
</script>

<style scoped>
.chat-container {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: var(--gray-blue);
  border-radius: 3px;
  transition: 0.1s;
  color: #fff;
  margin-bottom: 4px;
}

.chat-container-active, .chat-container:hover {
  background-color: var(--dark-grey-blue);
}

.chat-image {
  border-radius: 50%;
  margin-right: 10px;
}

.chat-username {
}
</style>
