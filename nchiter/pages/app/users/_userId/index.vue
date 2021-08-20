<template>
<div></div>
</template>

<script>
export default {
  name: "UserPage",
  layout: 'users',
  computed: {
    userId () {
      return this.$route.params.userId
    }
  },
  mounted () {
    this.$store.commit('currentUser/setCurrentPrivateChannel', this.userId)
  }
}
</script>

<style scoped>

</style>
