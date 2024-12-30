<template>
  <UContainer :class="['svg-bg', `bg-${color}-500`, 'flex', 'h-52','justify-between', 'items-center']">
    <UCard>
      <h2>
        Check out my <a href="https://aboutme-ahl.pages.dev" :class="`text-${color}-500 font-bold`">website</a>
      </h2>
    </UCard>
    <UCard>
      <h2>
        Check out my <a href="https://github.com/GuillermoK1" :class="`text-${color}-500 font-bold`">GitHub</a> repositories
      </h2>
    </UCard>
    <UCard>
      <h2>
        Check out my <a href="https://plasma.nuxt.dev" :class="`text-${color}-500 font-bold`">app</a> built with Nuxt3
      </h2>
    </UCard>
  </UContainer>
</template>

<script setup>
const { color } = useColor()
</script>

<style lang="css" scoped>
.svg-bg {
  background-image: url('../public/circuit-board.svg');
}
</style>