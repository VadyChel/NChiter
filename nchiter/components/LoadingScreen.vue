<template>
<div class="d-flex justify-center align-center flex-column" style="height: 100vh">
  <img src="/icon.png" alt="" width="160px">
  <v-progress-circular
    indeterminate
    size='96'
  ></v-progress-circular>
</div>
</template>

<script>
export default {
  name: "LoadingScreen"
}
</script>

<style scoped>

</style>
