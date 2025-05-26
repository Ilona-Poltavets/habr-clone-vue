<script setup lang="ts"></script>

<template>
  <main class="flex h-screen page-404">
    <div class="relative p-8 lg:w-1/2 hidden lg:block">
      <div class="error-message">
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button
          @click="$router.push('/')"
          class="absolute bottom-5 bg-white text-black py-1 px-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer text-2xl font-bold"
        >
          Go to Home
        </button>
      </div>
    </div>
    <div class="w-full relative lg:w-1/2">
      <div class="error-code">404</div>
      <div class="error-img">
        <img src="@/assets/img/cat.png" alt="404 Not Found" class="" />
        <h2 class="okak">окак</h2>
      </div>
    </div>
  </main>
</template>
