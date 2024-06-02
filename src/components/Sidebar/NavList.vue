<template>
  <NavListItem v-for="(route, index) in routes" :key="index" :route="route">
    {{  route.name }}
  </NavListItem>
</template>
<script setup lang="ts">
import NavListItem from "@/components/Sidebar/NavListItem.vue"

const routes = [
  { path: '/home', name: "ホーム" },
  { path: '/play', name: "遊ぶ" },
  { path: '/rankings', name: "ランキング" },
  { path: '/create', name: "単語リスト作成" },
  { path: '/edit', name: "単語リスト編集" },

]
</script>