<template>
  <ul class="flex list-style-none">
      <NavbarListItem v-for="(route, index) in routes" :key="index" :path="route.path">{{ route.title }}</NavbarListItem>
      <li>
        <a href="https://github.com/liyur-qie/typle-v" class="block text-sm py-5 px-6">GitHub</a>
      </li>
  </ul>
</template>
<script setup lang="ts">
import NavbarListItem from "@/components/Navbar/NavbarListItem.vue"

const routes = [
  { title: "ホーム", path: "/home" },
  { title: "記録", path: "/records" },
  { title: "作成", path: "/create" },
  { title: "編集", path: "/edit" },
]
</script>