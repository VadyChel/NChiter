<template>
<div></div>
</template>

<script>
export default {
  name: "MainAppPage",
  layout: 'app',
  mounted () {
    this.$router.push({ path: '/app/users/@me' })
  }
}
</script>

<style scoped>

</style>
