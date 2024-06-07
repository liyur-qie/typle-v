<template>
  <div id="sidebar">
    <AppLogo />
    <h3 class="text-sm font-bold ml-6 mt-12 mb-8">ナビ</h3>
    <NavList />
    <h3 class="text-sm font-bold ml-6 mt-12 mb-8">Languages</h3>
    <ul>
      <li class="selected" @click="switchLang('ja')">
        <a href="#" class="block text-sm py-4 pl-11">日本語</a>
      </li>
      <li @click="switchLang('en')">
        <a href="#" class="block text-sm py-4 pl-12">English</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "@/components/Sidebar/AppLogo.vue";
import NavList from "@/components/Sidebar/NavList.vue";

function switchLang(lang: "ja" | "en") {
  return lang;
}
</script>
<style lang="scss" scoped>
#sidebar {
  background-color: #fff;
  height: 100lvh;
}
</style>
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
