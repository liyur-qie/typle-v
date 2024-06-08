<template>
  <li class="list-none" :class="{ selected: isSelected }">
    <RouterLink
      :to="route.path"
      class="block box-border text-sm py-4 pl-12"
    >
      <slot />
    </RouterLink>
  </li>
</template>
<script setup lang="ts">
defineProps<{
  route: any;
  isSelected: boolean;
}>()
</script>
<style lang="scss" scoped>
li {
  &.selected {
    a {
      color: #e9176f;

      &::after {
        transform: scaleY(100%);
        transition: transform 0.25s;
      }
    }
  }
  
  a {
    position: relative;
    
    &:hover {
      background: linear-gradient(to right, #fef0f6 0%, #ffdae9 100%);
      color: #e9176f;
    }
      
    &::after {
      content: '';
      display: block;
      background-color: #e9176f;
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      transform: scaleY(0%);
    }
  }
}
</style>
