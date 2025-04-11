<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="h-4 p-2 m-2 text-bold text-2xl flex justify-between items-center">
            <p>Welcome to 
            <span :style="{ color: hexSecondaryColor }">N</span>uxt<span :style="{ color: hexSecondaryColor }">UI</span>
            Theme Customization, made by gkdevservices.com
            </p>
        </div>
          <div class="flex gap-2">
            <div class="relative">
              <UButton @click="isColorPickerOpen = !isColorPickerOpen">
                <UIcon name="i-heroicons-paint-brush" />
                Color Picker
              </UButton>
              
              <div v-if="isColorPickerOpen" 
                   class="absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 min-w-[300px]">
                <div class="space-y-4">
                  <div class="flex items-center gap-4">
                    <label class="min-w-[100px] font-medium">Primary:</label>
                    <input 
                      type="color" 
                      :value="hexPrimaryColor"
                      @change="handleHexPrimaryChange"
                      class="w-16 h-8 rounded-md cursor-pointer border-2"
                    />
                    <span class="font-mono text-sm">{{ hexPrimaryColor }}</span>
                  </div>
                  <div class="flex items-center gap-4">
                    <label class="min-w-[100px] font-medium">Secondary:</label>
                    <input 
                      type="color" 
                      :value="hexSecondaryColor"
                      @change="handleHexSecondaryChange"
                      class="w-16 h-8 rounded-md cursor-pointer border-2"
                    />
                    <span class="font-mono text-sm">{{ hexSecondaryColor }}</span>
                  </div>
                </div>
              </div>
              <ClientOnly>
                <UButton
                class="mx-2 w-10 h-10 ml-8"
                variant="ghost"
                color="black"
                :icon="colorMode.value === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
                @click="toggleColorMode"
                />
              </ClientOnly>
              </div>
        </div>
      </template>
      <slot />
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const { 
  hexPrimaryColor, 
  hexSecondaryColor, 
  handleHexPrimaryChange, 
  handleHexSecondaryChange 
} = useColorPicker()

const isColorPickerOpen = ref(false)

const colorMode = useColorMode()

// Initialize color mode preference
onMounted(() => {
  // Set initial color mode based on system preference
  if (!colorMode.preference) {
    colorMode.preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
})

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

</script>
