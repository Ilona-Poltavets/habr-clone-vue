<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

defineProps<{
  isDarkTheme: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <header class="site-header">
    <RouterLink to="/" class="brand">
      <span class="brand-mark">H</span>
      <span>HalfStack</span>
    </RouterLink>

    <nav class="site-nav" aria-label="Main navigation">
      <ul>
        <li>
          <RouterLink to="/">Новости</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">О проекте</RouterLink>
        </li>
      </ul>
    </nav>

    <ThemeToggle :isDarkTheme="isDarkTheme" @toggle="emit('toggle')" />
  </header>
</template>
