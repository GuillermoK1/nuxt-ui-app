<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between items-center">
          <h1>Welcome to Nuxt UI Starter</h1>
          <div class="flex gap-2">
            <USelect
              v-model="color"
              :options="colorOptions"
              placeholder="Select color"
              class="w-40"
            />
            <ColorScheme>
              <USelect 
                v-model="$colorMode.preference" 
                :options="['system', 'light', 'dark']" 
              />
            </ColorScheme>
          </div>
        </div>
      </template>
      <slot />
    </UCard>
  </UContainer>
</template>

<script setup>
const { color, colorOptions } = useColor()
</script>
