<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  isDarkTheme: Boolean,
})

const emit = defineEmits(['toggle'])

const handleToggle = () => {
  emit('toggle')
}
</script>

<template>
  <div class="flex items-center justify-center mb-12">
    <label for="theme-toggle" class="flex items-center cursor-pointer">
      <div class="relative">
        <input
          id="theme-toggle"
          type="checkbox"
          class="sr-only"
          :checked="isDarkTheme"
          @change="handleToggle"
        />
        <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div
          class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition-transform duration-300"
          :class="isDarkTheme ? 'translate-x-full bg-yellow-400' : 'bg-white'"
        ></div>
      </div>
    </label>
  </div>
</template>

<style scoped>
.theme-toggle {
  margin-left: 1rem;
}
</style>
