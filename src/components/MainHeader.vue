<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="flex items-center justify-between p-7 bg-gray-200 dark:bg-gray-950">
    <nav class="w-full">
      <ul class="flex items-center">
        <li>
          <RouterLink
            to="/"
            class="text-gray-950 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/about"
            class="text-gray-950 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
            >About</RouterLink
          >
        </li>
      </ul>
    </nav>
    <ThemeToggle :isDarkTheme="isDarkTheme" @toggle="toggleTheme" />
  </header>
</template>
