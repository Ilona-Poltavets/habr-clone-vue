<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getArticles, type Article, type ArticleSection } from '@/services/api'

const fallbackArticles: Article[] = [
  {
    id: 1,
    slug: 'coop-rpg-crossplay-season',
    title: 'Новый сезон кооперативных RPG делает ставку на кроссплей',
    excerpt: 'Разработчики синхронизируют прогресс между PC и консолями.',
    body: '',
    language: 'ru',
    section: 'games',
    author: 'Gaming Desk',
    read_minutes: 4,
    published_at: '2026-06-01T09:00:00Z',
    tags: ['RPG', 'crossplay', 'PC'],
    is_featured: true,
  },
  {
    id: 2,
    slug: 'indie-live-playtests',
    title: 'Indie studios move demos into live community playtests',
    excerpt: 'Small teams are using public testing as an editorial and product tool.',
    body: '',
    language: 'en',
    section: 'games',
    author: 'Gaming Desk',
    read_minutes: 3,
    published_at: '2026-06-01T10:30:00Z',
    tags: ['indie', 'playtests', 'Steam'],
    is_featured: false,
  },
  {
    id: 3,
    slug: 'typescript-python-product-speed',
    title: 'TypeScript и Python остаются главными языками для быстрых продуктов',
    excerpt: 'Команды выбирают типизацию, понятные API и автоматизацию тестов.',
    body: '',
    language: 'ru',
    section: 'programming',
    author: 'Dev Desk',
    read_minutes: 5,
    published_at: '2026-06-01T11:00:00Z',
    tags: ['TypeScript', 'Python', 'API'],
    is_featured: true,
  },
  {
    id: 4,
    slug: 'framework-updates-smaller-bundles',
    title: 'Framework updates focus on smaller bundles and faster hydration',
    excerpt: 'Frontend releases keep pushing runtime cost down.',
    body: '',
    language: 'en',
    section: 'programming',
    author: 'Dev Desk',
    read_minutes: 4,
    published_at: '2026-06-01T12:15:00Z',
    tags: ['frontend', 'performance', 'frameworks'],
    is_featured: false,
  },
]

const articles = ref<Article[]>(fallbackArticles)
const apiError = ref('')

const articlesBySection = (section: ArticleSection) =>
  computed(() => articles.value.filter((article) => article.section === section))

const featuredArticle = (section: ArticleSection) =>
  computed(
    () =>
      articles.value.find((article) => article.section === section && article.is_featured) ??
      articles.value.find((article) => article.section === section),
  )

const gameArticles = articlesBySection('games')
const programmingArticles = articlesBySection('programming')
const featuredGameArticle = featuredArticle('games')
const featuredProgrammingArticle = featuredArticle('programming')

onMounted(async () => {
  try {
    articles.value = await getArticles()
  } catch {
    apiError.value = 'API не запущен, показаны демо-новости.'
  }
})
</script>

<template>
  <main class="home-page">
    <section class="hero">
      <div class="hero__content">
        <p class="eyebrow">RU / EN • Games / Programming</p>
        <h1>Блог для программистов и геймеров</h1>
        <p>
          Одна лента разделена пополам: слева новости игровой индустрии, справа
          программирование, фреймворки, инструменты и инженерные практики.
        </p>
      </div>
    </section>

    <p v-if="apiError" class="api-status">{{ apiError }}</p>

    <section class="editorial-grid" aria-label="News sections">
      <article class="news-column news-column--games">
        <div class="column-head">
          <span class="section-tag">Gaming desk</span>
          <h2>Новости игр</h2>
          <p>Релизы, патчи, железо, киберспорт и культура гейминга.</p>
        </div>

        <div v-if="featuredGameArticle" class="featured-card">
          <span>Главное</span>
          <h3>{{ featuredGameArticle.title }}</h3>
          <p>{{ featuredGameArticle.excerpt }}</p>
        </div>

        <ul class="story-list">
          <li v-for="article in gameArticles" :key="article.id">
            <span>{{ article.language.toUpperCase() }}</span>
            <p>{{ article.title }}</p>
          </li>
        </ul>
      </article>

      <article class="news-column news-column--code">
        <div class="column-head">
          <span class="section-tag">Dev desk</span>
          <h2>Программирование</h2>
          <p>Frontend, backend, AI-инструменты, архитектура и рабочие процессы.</p>
        </div>

        <div v-if="featuredProgrammingArticle" class="featured-card">
          <span>Главное</span>
          <h3>{{ featuredProgrammingArticle.title }}</h3>
          <p>{{ featuredProgrammingArticle.excerpt }}</p>
        </div>

        <ul class="story-list">
          <li v-for="article in programmingArticles" :key="article.id">
            <span>{{ article.language.toUpperCase() }}</span>
            <p>{{ article.title }}</p>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>
