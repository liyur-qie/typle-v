<template>
  <li class="list-none" :class="{ selected: isSelected }">
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
  route: any;
  isSelected: boolean;
}>();
</script>
<style lang="scss" scoped>
li {
  &.selected {
    a {
      border-left: 4px solid #e9176f;
      color: #e9176f;
    }
  }

  a {
    transition: background 0.15s;

    &:hover {
      background: linear-gradient(to right, #fef0f6 0%, #ffdae9 100%);
      color: #e9176f;
    }
  }
}
</style>
