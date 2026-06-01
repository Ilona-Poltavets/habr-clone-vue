<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getMainSection } from '@/data/sections'

const route = useRoute()

const section = computed(() => getMainSection(route.params.sectionSlug))
</script>

<template>
  <main v-if="section" class="section-page" :class="`section-page--${section.slug}`">
    <section class="section-hero">
      <p class="eyebrow">{{ section.label }}</p>
      <h1>{{ section.title }}</h1>
      <p>{{ section.description }}</p>
    </section>

    <section class="tile-grid" :aria-label="`${section.title}: категории`">
      <RouterLink
        v-for="category in section.categories"
        :id="category.slug"
        :key="category.slug"
        class="category-tile"
        :to="`/sections/${section.slug}#${category.slug}`"
      >
        <span>{{ section.title }}</span>
        <h2>{{ category.title }}</h2>
        <p>{{ category.description }}</p>
      </RouterLink>
    </section>
  </main>

  <main v-else class="section-page">
    <section class="section-hero">
      <p class="eyebrow">404</p>
      <h1>Раздел не найден</h1>
      <p>Такого раздела нет в главном меню.</p>
    </section>
  </main>
</template>
