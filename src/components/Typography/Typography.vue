<template>
  <p :class="classNames">
    <slot />
  </p>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps<{
  size?: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl"
}>()

const classNames = computed(() => {
  if(props.size !== undefined){
    return props.size
  }
}
</script>