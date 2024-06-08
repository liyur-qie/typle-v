<template>
  <li class="navbarListItem" :class="{ selected: isSelected }">
    <RouterLink :to="path" class="block box-border text-sm py-5 px-6">
      <slot />
    </RouterLink>
  </li>
</template>
<script setup lang="ts">
defineProps<{
  path: string;
  isSelected: boolean;
}>()
</script>
<style lang="scss" scoped>
li {
  &.selected {
    a {
      position: relative;
      color: #e9176f;

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        top: calc(100% - 2px);
        left: 0;
        border-bottom: 2px solid #e9176f;
      }
    }
  }

  a {
    transition: background 0.15s;

    &:hover {
      background: linear-gradient(to bottom, #fef0f6 0%, #ffdae9 100%);
      color: #e9176f;
    }
  }
}
</style>
