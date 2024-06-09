<template>
  <div id="sidebar">
    <AppLogo />
    <h3 class="text-sm font-bold ml-6 mt-12 mb-8">{{ $t("ui.navList.nav.headerTitle") }}</h3>
    <NavList />
    <h3 class="text-sm font-bold ml-6 mt-12 mb-8">{{ $t("ui.navList.lang.headerTitle" )}}</h3>
    <ul>
      <li :class="{ selected: locale === 'ja' }" @click="switchLang('ja')">
        <a href="#" class="block text-sm py-4 pl-12">日本語</a>
      </li>
      <li :class="{ selected: locale === 'en' }" @click="switchLang('en')">
        <a href="#" class="block text-sm py-4 pl-12">English</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "@/components/Sidebar/AppLogo.vue"
import NavList from "@/components/Sidebar/NavList.vue"
import { useI18n } from "vue-i18n"

const { locale } = useI18n({ useScope: 'global' })

function switchLang(lang: "ja" | "en") {
  locale.value = lang
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
      background-color: #e9176f;
      content: '';
      display: block;
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
