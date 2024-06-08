<template>
  <NavListItem
    v-for="(route, index) in routes"
    :key="index"
    :route="route"
    :is-selected="isSelected(route.path)"
  >
    {{ route.text }}
  </NavListItem>
</template>
<script setup lang="ts">
import NavListItem from "@/components/Sidebar/NavListItem.vue"
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
