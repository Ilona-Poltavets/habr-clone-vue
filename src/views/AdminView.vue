<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAdminOverview, type AdminOverview } from '@/services/api'

const overview = ref<AdminOverview | null>(null)
const errorMessage = ref('')

onMounted(async () => {
  const token = localStorage.getItem('auth_token')

  if (!token) {
    errorMessage.value = 'Нужен вход с ролью Администратор.'
    return
  }

  try {
    overview.value = await getAdminOverview(token)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Нет доступа к админке'
  }
})
</script>

<template>
  <main class="admin-page">
    <section class="admin-hero">
      <p class="eyebrow">Admin draft</p>
      <h1>Админ-панель</h1>
      <p>
        Заготовка под управление пользователями, ролями, настройками сайта,
        публикациями, рекламой, модерацией и статистикой.
      </p>
    </section>

    <p v-if="errorMessage" class="api-status">{{ errorMessage }}</p>

    <section v-if="overview" class="admin-grid">
      <article>
        <span>Пользователи</span>
        <strong>{{ overview.users_count }}</strong>
      </article>
      <article>
        <span>Материалы</span>
        <strong>{{ overview.articles_count }}</strong>
      </article>
      <article>
        <span>Роли</span>
        <strong>{{ overview.roles_count }}</strong>
      </article>
      <article>
        <span>На проверке</span>
        <strong>{{ overview.pending_reviews }}</strong>
      </article>
      <article>
        <span>Жалобы</span>
        <strong>{{ overview.reports_count }}</strong>
      </article>
    </section>

    <section class="admin-modules">
      <article>
        <h2>Пользователи и роли</h2>
        <p>Будущее место для назначения ролей, блокировок и управления доступом.</p>
      </article>
      <article>
        <h2>Контент</h2>
        <p>Публикация, удаление, ревью и распределение задач авторам.</p>
      </article>
      <article>
        <h2>Модерация</h2>
        <p>Комментарии, жалобы, токсичный контент и пользовательские блокировки.</p>
      </article>
      <article>
        <h2>Сайт и реклама</h2>
        <p>Настройки сайта, рекламные места и базовая статистика.</p>
      </article>
    </section>
  </main>
</template>
