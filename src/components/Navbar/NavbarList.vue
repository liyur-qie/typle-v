<template>
  <ul class="flex list-style-none">
    <li class="navbarListItem" :class="{ selected: isSelected('/home') }">
      <RouterLink to="/home" class="block box-border text-sm py-5 px-6">
        {{ $t("ui.navbarList.home") }}
      </RouterLink>
    </li>
    <li class="navbarListItem" :class="{ selected: isSelected('/play') }">
      <RouterLink to="/play" class="block box-border text-sm py-5 px-6">
        {{ $t("ui.navbarList.play") }}
      </RouterLink>
    </li>
    <li class="navbarListItem" :class="{ selected: isSelected('/records') }">
      <RouterLink to="/records" class="block box-border text-sm py-5 px-6">
        {{ $t("ui.navbarList.records") }}
      </RouterLink>
    </li>
    <li class="navbarListItem" :class="{ selected: isSelected('/create') }">
      <RouterLink to="/create" class="block box-border text-sm py-5 px-6">
        {{ $t("ui.navbarList.create") }}
      </RouterLink>
    </li>
    <li class="navbarListItem" :class="{ selected: isSelected('/edit') }">
      <RouterLink to="/edit" class="block box-border text-sm py-5 px-6">
        {{ $t("ui.navbarList.edit") }}
      </RouterLink>
    </li>
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
import { useRoute } from "vue-router"

const route = useRoute()
function isSelected(path: string): boolean {
  return path === route.path
}
</script>
<style lang="scss" scoped>
li {
  a {
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      top: calc(100% - 2px);
      left: 0;
      border-bottom: 2px solid #e9176f;
      transform: scaleX(0%);
      transition: transform 0.25s;
    }
  }

  &.selected {
    a {
      position: relative;
      color: #e9176f;

      &::after {
        transform: scaleX(100%);
      }
    }
  }

  a {
    &:hover {
      background: linear-gradient(to bottom, #fef0f6 0%, #ffdae9 100%);
      color: #e9176f;
    }
  }
}
</style>
