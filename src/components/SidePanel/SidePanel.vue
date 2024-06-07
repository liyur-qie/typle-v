<template>
  <div class="sidePanel px-6 py-4">
    <slot />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.sidePanel {
  background-color: white;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
}
</style>
