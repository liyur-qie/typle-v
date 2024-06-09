<template>
  <nav class="flex justify-center items-center bg-white">
    <div class="navbar w-full">
      <div
        class="navbarContainer flex justify-between lg:justify-end items-center w-10/12 mx-auto"
      >
        <h1 class="text-lg lg:hidden">Typle</h1>
        <NavbarList />
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import NavbarList from "@/components/Navbar/NavbarList.vue"
</script>
<style lang="scss">
.navbar {
  background-color: #fafafa;

  .navbarContainer {
    max-width: 1280px;
  }
}
</style>
