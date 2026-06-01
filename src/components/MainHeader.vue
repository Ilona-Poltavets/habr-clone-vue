<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
import { mainSections } from '@/data/sections'

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
        <li v-for="section in mainSections" :key="section.slug" class="nav-item">
          <RouterLink :to="`/sections/${section.slug}`">{{ section.title }}</RouterLink>
          <div class="nav-menu">
            <RouterLink
              v-for="category in section.categories"
              :key="category.slug"
              :to="`/sections/${section.slug}#${category.slug}`"
            >
              {{ category.title }}
            </RouterLink>
          </div>
        </li>
      </ul>
    </nav>

    <div class="header-actions">
      <div class="language-switch language-switch--header" aria-label="Language switcher">
        <button type="button" class="active">RU</button>
        <button type="button">EN</button>
      </div>
      <ThemeToggle :isDarkTheme="isDarkTheme" @toggle="emit('toggle')" />
    </div>
  </header>
</template>
