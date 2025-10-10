<script setup>

</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <router-view v-slot="{Component}">
      <KeepAlive  include="Home">
        <Component :is="Component" />
      </KeepAlive>
    </router-view>
  </div>
</template>

<style scoped>

</style>
