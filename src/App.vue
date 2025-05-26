<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ThemeToggle from './components/ThemeToggle.vue'

const isDarkTheme = ref(false)

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value

  const classList = document.documentElement.classList
  const bodyClassList = document.body.classList

  if (isDarkTheme.value) {
    console.log(classList)
    classList.add('dark')
    // bodyClassList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    classList.remove('dark')
    // bodyClassList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDarkTheme.value = savedTheme === 'dark'

  if (isDarkTheme.value) {
    document.documentElement.classList.add('dark')
    // document.body.classList.add('dark')
  }
})
</script>

<template>
  <header class="flex items-center justify-between p-7">
    <nav>
      <div class="container mx-auto my-auto flex">
        <div class="flex items-center space-x-4">
          <RouterLink to="/" class="text-gray-300 hover:text-white">Home</RouterLink>
          <RouterLink to="/about" class="text-gray-300 hover:text-white">About</RouterLink>
        </div>
      </div>
    </nav>
    <ThemeToggle :isDarkTheme="isDarkTheme" @toggle="toggleTheme" />
  </header>

  <RouterView />
</template>
