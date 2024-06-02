<template>
  <nav class="flex justify-center items-center h-16 bg-white">
    <div className="navbar w-full">
      <div className="flex justify-end w-4/5 mx-auto">
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
  background-color: #fff;
}
</style>