<template>
  <div id="sidebar">
    <AppLogo />
    <h3 class="text-sm font-bold ml-6 mt-12 mb-8">ナビ</h3>
    <NavList />
  </div>
</template>
<script setup lang="ts">
import AppLogo from "@/components/Sidebar/AppLogo.vue"
import NavList from "@/components/Sidebar/NavList.vue"
</script>
<style lang="scss">
#sidebar {
  background-color: #fff;
  height: 100vh;
}
</style>