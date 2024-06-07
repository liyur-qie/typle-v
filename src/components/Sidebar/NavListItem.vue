<template>
  <li
    class="list-none"
    :class="{'selected': isSelected}"
  >
    <RouterLink
      :to="route.path"
      class="block box-border text-sm py-4"
      :class="[isSelected ? 'pl-11' : 'pl-12']"
    >
      <slot />
    </RouterLink>
  </li>
</template>
<script setup lang="ts">
defineProps<{
  route: any,
  isSelected: boolean
}>()
</script>
<style lang="scss" scoped>
li {
  &.selected {
    a {
      border-left: 4px solid #E9176F;
      color: #E9176F;
    }
  }

  a {
    transition: background 0.15s;

    &:hover {
      background: linear-gradient(to right, #FEF0F6 0%, #FFDAE9 100%);
      color: #E9176F;
    }
  }
}
</style>