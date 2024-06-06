<template>
  <nav class="flex justify-center items-center bg-white">
    <div class="navbar w-full">
      <div class="flex justify-end w-4/5 mx-auto">
        <NavbarList />
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import NavbarList from '@/components/Navbar/NavbarList.vue';
</script>
<style lang="scss">
.navbar {
  background-color: #fafafa;
}
</style>