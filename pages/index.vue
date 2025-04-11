<template>
  <UContainer class="svg-bg grid gap-6 py-6 grid-cols-2 h-auto justify-between items-center" :style="containerStyle">
    <UCard v-for="(item, index) in cardItems" :key="index" :class="{ 'opacity-50': item.placeholder }">
      <h2>
        <a :href="item.link">
          Check out my <span class="font-bold" :style="{ color: hexSecondaryColor }">{{ item.text }}</span>
          {{ item.placeholder ? 'placeholder' : '' }}
        </a>
      </h2>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { useColorPicker } from '~/composables/useColorPicker'
import { computed } from 'vue'

const { hexPrimaryColor, hexSecondaryColor } = useColorPicker()

const cardItems = [
  { link: 'https://aboutme-ahl.pages.dev', text: 'website', placeholder: false },
  { link: 'https://github.com/GuillermoK1', text: 'GitHub', placeholder: false },
  { link: 'https://plasma.nuxt.dev', text: 'app', placeholder: false },
  { link: 'https://', text: 'placeholder', placeholder: true },
  { link: 'https://', text: 'placeholder', placeholder: true },
  { link: 'https://', text: 'placeholder', placeholder: true },
  { link: 'https://', text: 'placeholder', placeholder: true },
  { link: 'https://', text: 'placeholder', placeholder: true },
  { link: 'https://', text: 'placeholder', placeholder: true }
]

const containerStyle = computed(() => ({
  backgroundColor: hexPrimaryColor.value ? `${hexPrimaryColor.value}80` : '#00000080'
}))
</script>

<style lang="css" scoped>
.svg-bg {
  background-image: url('../public/circuit-board.svg');
}
</style>