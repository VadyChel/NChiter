<template>
  <nuxt-link to="/app/users/@me" :class="{'home-button': true, 'home-button-active': isHomePage}">
    <v-icon size="48px" color="#ccc">mdi-home</v-icon>
  </nuxt-link>
</template>

<script>
export default {
  name: "HomeButton",
  computed: {
    isHomePage () {
      return this.$route.path.includes('@me')
    }
  }
}
</script>

<style scoped>
.home-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s;
}

.home-button-active, .home-button:hover{
  background-color: #567b89;
}
</style>
