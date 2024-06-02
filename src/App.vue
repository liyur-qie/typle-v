<template>
  <div className="flex flex-wrap">
    <Sidebar />
    <div className="flex-auto">
      <Navbar />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue"
import Sidebar from '@/components/Sidebar/Sidebar.vue';
</script>