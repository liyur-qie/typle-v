<template>
  <div class="page flex justify-center" :class="pageBgColor">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  bgColor?: "white";
}>()

const pageBgColor = computed(() => {
  return props.bgColor !== undefined ? "bg-white" : ""
})
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  background-color: #dfdfdf;
}
</style>
