<template>
  <li class="navbarListItem">
    <RouterLink :to="path" class="block text-sm py-5 px-6">
      <slot />
    </RouterLink>
  </li>
</template>
<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>