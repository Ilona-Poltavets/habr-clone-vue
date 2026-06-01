<script setup lang="ts">
defineProps<{
  isDarkTheme: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()

const handleToggle = () => {
  emit('toggle')
}
</script>

<template>
  <button class="theme-toggle" type="button" :aria-pressed="isDarkTheme" @click="handleToggle">
    <span>{{ isDarkTheme ? 'Dark' : 'Light' }}</span>
    <span class="theme-toggle__track">
      <span class="theme-toggle__dot" />
    </span>
  </button>
</template>
