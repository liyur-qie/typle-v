<template>
  <ul class="flex list-style-none">
    <NavbarListItem
      v-for="(route, index) in routes"
      :key="index"
      :path="route.path"
      :is-selected="isSelected(route.path)"
    >
      {{ route.text }}
    </NavbarListItem>
    <li>
      <a
        href="https://github.com/liyur-qie/typle-v"
        class="block text-sm py-5 px-6"
        >GitHub</a
      >
    </li>
  </ul>
</template>
<script setup lang="ts">
import NavbarListItem from "@/components/Navbar/NavbarListItem.vue"
import { useRoute } from "vue-router"

const routes = [
  { path: "/home", text: "ホーム" },
  { path: "/play", text: "遊ぶ" },
  { path: "/records", text: "記録" },
  { path: "/create", text: "作成" },
  { path: "/edit", text: "編集" },
]

const route = useRoute()
function isSelected(path: string): boolean {
  return path === route.path
}
</script>
