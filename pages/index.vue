<template>
  <UContainer :class="['svg-bg', `bg-${color}-400`, 'bg-opacity-50', 'grid', 'gap-6', 'py-6', 'grid-cols-2', 'h-auto','justify-between', 'items-center']">
    <UCard>
      <h2>
        <a href="https://aboutme-ahl.pages.dev">Check out my <span :class="`text-${color}-500 font-bold`">website</span></a>
      </h2>
    </UCard>
    <UCard>
      <h2>
        <a href="https://github.com/GuillermoK1">Check out my <span :class="`text-${color}-500 font-bold`">GitHub</span> repositories</a>
      </h2>
    </UCard>
    <UCard>
      <h2>
        <a href="https://plasma.nuxt.dev">Check out my <span :class="`text-${color}-500 font-bold`">app</span> built with Nuxt3</a>
      </h2>
    </UCard>
    <UCard class="opacity-50">
      <h2>
        <a href="https://">Check out my <span :class="`text-${color}-500 font-bold`">placeholder</span> placeholder</a>
      </h2>
    </UCard>
    <UCard class="opacity-50">
      <h2>
        <a href="https://">Check out my <span :class="`text-${color}-500 font-bold`">placeholder</span> placeholder</a>
      </h2>
    </UCard>
    <UCard class="opacity-50">
      <h2>
        <a href="https://">Check out my <span :class="`text-${color}-500 font-bold`">placeholder</span> placeholder</a>
      </h2>
    </UCard>
    <UCard class="opacity-50">
      <h2>
        <a href="https://">Check out my <span :class="`text-${color}-500 font-bold`">placeholder</span> placeholder</a>
      </h2>
    </UCard>
    <UCard class="opacity-50">
      <h2>
        <a href="https://">Check out my <span :class="`text-${color}-500 font-bold`">placeholder</span> placeholder</a>
      </h2>
    </UCard>
    <UCard class="opacity-50">
      <h2>
        <a href="https://">Check out my <span :class="`text-${color}-500 font-bold`">placeholder</span> placeholder</a>
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