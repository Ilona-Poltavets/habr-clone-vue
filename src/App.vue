<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MainHeader from './components/MainHeader.vue'

const isDarkTheme = ref(false)
const route = useRoute()

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value

  const classList = document.documentElement.classList
  const bodyClassList = document.body.classList

  if (isDarkTheme.value) {
    console.log(classList)
    classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDarkTheme.value = savedTheme === 'dark'

  if (isDarkTheme.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <MainHeader v-if="route.path !== '/login'" :isDarkTheme="isDarkTheme" @toggle="toggleTheme" />
  <RouterView />
</template>
