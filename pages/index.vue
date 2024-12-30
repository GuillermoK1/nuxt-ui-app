<template>
  <UButton 
    icon="i-heroicons-book-open" 
    :color="color"
    to="https://ui.nuxt.com" 
    target="_blank"
  >
    Open Nuxt UI Documentation
  </UButton>
</template>

<script setup>
const { color } = useColor()
</script>
