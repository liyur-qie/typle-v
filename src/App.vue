<template>
  <div className="flex flex-wrap">
    <Sidebar class="hidden lg:block" />
    <div className="flex-auto">
      <Navbar />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue"
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import { WordList } from "./models/screen/WordList"
import getWordLists from "./api/getWordLists"
import { Ref, provide, ref } from "vue"

const wordLists = ref<WordList[]>(getWordLists())
provide<Ref<WordList[]>>('wordLists', wordLists)
</script>