<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser, registerUser, type AuthResponse } from '@/services/api'

const router = useRouter()
const mode = ref<'login' | 'register'>('login')
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const loginForm = ref({
  email: 'admin@halfstack.dev',
  password: 'admin12345',
})

const registerForm = ref({
  username: '',
  email: '',
  password: '',
})

const title = computed(() => (mode.value === 'login' ? 'Вход' : 'Регистрация'))
const subtitle = computed(() =>
  mode.value === 'login'
    ? 'Войди как пользователь, автор, модератор или администратор.'
    : 'Создай аккаунт. Новые аккаунты получают роль Пользователь.',
)

const saveAuth = (auth: AuthResponse) => {
  localStorage.setItem('auth_token', auth.token)
  localStorage.setItem('auth_user', JSON.stringify(auth.user))
}

const submitLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const auth = await loginUser(loginForm.value)
    saveAuth(auth)
    successMessage.value = `Вы вошли как ${auth.user.role_title}.`

    if (auth.user.role === 'admin') {
      await router.push('/admin')
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Не удалось войти'
  } finally {
    isLoading.value = false
  }
}

const submitRegister = async () => {
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const auth = await registerUser(registerForm.value)
    saveAuth(auth)
    successMessage.value = `Аккаунт создан. Роль: ${auth.user.role_title}.`
    await router.push('/')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Не удалось создать аккаунт'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="auth-page">
    <RouterLink class="auth-brand" to="/">
      <span class="brand-mark">H</span>
      <span>HalfStack</span>
    </RouterLink>

    <section class="auth-shell">
      <div class="auth-copy">
        <p class="eyebrow">Access Control</p>
        <h1>Логин, регистрация и роли для редакции</h1>
        <p>
          Заготовка авторизации уже разделяет доступ для админа, редакции, авторов,
          проверяющих, модераторов и обычных пользователей.
        </p>

        <div class="role-preview">
          <span>Admin</span>
          <span>Editor-in-Chief</span>
          <span>Author</span>
          <span>Reviewer</span>
          <span>Moderator</span>
          <span>User</span>
          <span>Guest</span>
        </div>
      </div>

      <div class="auth-card">
        <div class="auth-tabs">
          <button type="button" :class="{ active: mode === 'login' }" @click="mode = 'login'">
            Вход
          </button>
          <button
            type="button"
            :class="{ active: mode === 'register' }"
            @click="mode = 'register'"
          >
            Регистрация
          </button>
        </div>

        <div class="auth-card__head">
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
        </div>

        <form v-if="mode === 'login'" class="auth-form" @submit.prevent="submitLogin">
          <label>
            Email
            <input v-model="loginForm.email" type="email" autocomplete="email" required />
          </label>

          <label>
            Пароль
            <input
              v-model="loginForm.password"
              type="password"
              autocomplete="current-password"
              required
            />
          </label>

          <button class="auth-submit" type="submit" :disabled="isLoading">
            {{ isLoading ? 'Входим...' : 'Войти' }}
          </button>
        </form>

        <form v-else class="auth-form" @submit.prevent="submitRegister">
          <label>
            Имя
            <input v-model="registerForm.username" type="text" autocomplete="name" required />
          </label>

          <label>
            Email
            <input v-model="registerForm.email" type="email" autocomplete="email" required />
          </label>

          <label>
            Пароль
            <input
              v-model="registerForm.password"
              type="password"
              autocomplete="new-password"
              minlength="8"
              required
            />
          </label>

          <button class="auth-submit" type="submit" :disabled="isLoading">
            {{ isLoading ? 'Создаем...' : 'Создать аккаунт' }}
          </button>
        </form>

        <p v-if="errorMessage" class="auth-message auth-message--error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="auth-message auth-message--success">{{ successMessage }}</p>

        <p class="auth-hint">Тестовый админ: admin@halfstack.dev / admin12345</p>
      </div>
    </section>
  </main>
</template>
