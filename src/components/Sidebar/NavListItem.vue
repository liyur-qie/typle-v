<template>
  <li class="list-none">
    <RouterLink :to="route.path" class="block text-sm py-4 pl-12">
      <slot />
    </RouterLink>
  </li>
</template>
<script setup lang="ts">
defineProps<{ route: any }>()
</script>
<style lang="scss">
li {
  a {
    &:hover {
      background: #FEF0F6;
      color: #E9176F;
    }
  }
}
</style>