<template>
    <div class="p-8 space-y-12">
        <!-- Title -->
        <h1 class="text-3xl font-bold text-center mb-8">Theme Color Customization</h1>

        <!-- Hex Color Input Demo -->
        <section class="space-y-4">
            <h2 class="text-2xl font-semibold mb-4">Hex Color Picker</h2>
            <div class="flex flex-wrap gap-8 p-6 rounded-xl shadow-lg bg-gray-200 dark:bg-gray-800">
                <div class="flex flex-col gap-6">
                    <div class="flex items-center gap-4">
                        <label class="min-w-[120px] font-medium">Primary Color:</label>
                        <input 
                            type="color" 
                            :value="hexPrimaryColor"
                            @change="handleHexPrimaryChange"
                            class="w-24 h-12 rounded-md cursor-pointer border-2"
                        />
                        <div class="px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow">
                            <span class="font-mono">{{ hexPrimaryColor }}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <label class="min-w-[120px] font-medium">Secondary Color:</label>
                        <input 
                            type="color" 
                            :value="hexSecondaryColor"
                            @change="handleHexSecondaryChange"
                            class="w-24 h-12 rounded-md cursor-pointer border-2"
                        />
                        <div class="px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow">
                            <span class="font-mono">{{ hexSecondaryColor }}</span>
                        </div>
                    </div>
                </div>
                
                <div class="flex-1 min-w-[300px]">
                    <div class="max-w-sm rounded-xl shadow-lg overflow-hidden">
                        <div class="p-6" :style="{ backgroundColor: hexPrimaryColor }">
                            <h3 class="text-xl font-bold mb-3" :style="{ color: hexSecondaryColor }">Color Preview</h3>
                            <p class="text-base" :style="{ color: hexSecondaryColor }">
                                Preview how your selected colors will look together in a real interface.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Class-based Color Demo -->
        <section class="space-y-4">
            <h2 class="text-2xl font-semibold mb-4">Preset Color Classes</h2>
            <div class="p-6 rounded-xl shadow-lg bg-gray-200 dark:bg-gray-800">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-6">
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium">Primary Color</label>
                            <select v-model="primaryColor" @change="updatePrimaryColor"
                                    class="w-full p-2 rounded-md border border-gray-300 bg-white dark:bg-black hover:border-gray-400 transition-colors duration-200">
                                <option v-for="option in colorOptions" :key="option.value" :value="option.value">
                                    {{ option.label }}
                                </option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium">Secondary Color</label>
                            <select v-model="secondaryColor" @change="updateSecondaryColor"
                                    class="w-full p-2 rounded-md border border-gray-300 bg-white dark:bg-black hover:border-gray-400 transition-colors duration-200">
                                <option v-for="option in colorOptions" :key="option.value" :value="option.value">
                                    {{ option.label }}
                                </option>
                            </select>
                        </div>
                        <div class="flex gap-4">
                            <div :class="['flex items-center justify-center p-4 rounded-lg shadow-md w-24 h-24', getColorClass(primaryColor)]">
                                <span class="text-sm font-medium">Primary</span>
                            </div>
                            <div :class="['flex items-center justify-center p-4 rounded-lg shadow-md w-24 h-24', getColorClass(secondaryColor)]">
                                <span class="text-sm font-medium">Secondary</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="max-w-sm rounded-xl shadow-lg overflow-hidden">
                        <div :class="[getColorClass(primaryColor), 'p-6']">
                            <h3 class="text-xl font-bold p-2 mb-3" :class="getColorClass(secondaryColor)">Color Preview</h3>
                            <p class="text-base p-2" :class="getColorClass(secondaryColor)">
                                Preview how your selected colors will look together in a real interface.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useColor } from '~/composables/useColor'
import { useColorPicker } from '~/composables/useColorPicker'

const { primaryColor, secondaryColor, colorOptions, setPrimaryColor, setSecondaryColor, getColorClass } = useColor()
const { 
  hexPrimaryColor, 
  hexSecondaryColor, 
  handleHexPrimaryChange, 
  handleHexSecondaryChange 
} = useColorPicker()

// Class-based color handlers
const updatePrimaryColor = (event: Event) => {
  const target = event.target as HTMLSelectElement
  setPrimaryColor(target.value)
}

const updateSecondaryColor = (event: Event) => {
  const target = event.target as HTMLSelectElement
  setSecondaryColor(target.value)
}
</script>