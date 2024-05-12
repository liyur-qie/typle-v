<template>
  <nav class="flex justify-center items-center h-16 bg-white">
    <div class="flex justify-between w-4/5">
      <h1 class="text-xl">Typle</h1>
      <ul class="flex">
        <li v-for="navItem in navItems">
          <router-link
            :to="'/' + navItem"
            class="text-sm py-3 px-6 hover:bg-gray-100"
          >{{ navItem }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <main class="mx-auto mt-12 bg-white w-4/5">
    <router-view />
  </main>
</template>
<script setup lang="ts">
const navItems = ["home", "play", "Rankings", "Create", "Edit", "About"]
</script>