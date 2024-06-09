<template>
    <li class="list-none" :class="{ selected: isSelected('/home') }">
    <RouterLink to="/home" class="block box-border text-sm py-4 pl-12">
      {{ $t("ui.navList.nav.home") }}
    </RouterLink>
  </li>
    <li class="list-none" :class="{ selected: isSelected('/play') }">
    <RouterLink to="/play" class="block box-border text-sm py-4 pl-12">
      {{ $t("ui.navList.nav.play") }}
    </RouterLink>
  </li>
    <li class="list-none" :class="{ selected: isSelected('/records') }">
    <RouterLink to="/records" class="block box-border text-sm py-4 pl-12">
      {{ $t("ui.navList.nav.records") }}
    </RouterLink>
  </li>
    <li class="list-none" :class="{ selected: isSelected('/create') }">
    <RouterLink to="/create" class="block box-border text-sm py-4 pl-12">
      {{ $t("ui.navList.nav.create") }}
    </RouterLink>
  </li>
    <li class="list-none" :class="{ selected: isSelected('/edit') }">
    <RouterLink to="/edit" class="block box-border text-sm py-4 pl-12">
      {{ $t("ui.navList.nav.edit") }}
    </RouterLink>
  </li>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
function isSelected(path: string): boolean {
  return path === route.path
}
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