export type ArticleSection = 'games' | 'programming'
export type ArticleLanguage = 'ru' | 'en'

export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  body: string
  language: ArticleLanguage
  section: ArticleSection
  author: string
  read_minutes: number
  published_at: string
  tags: string[]
  is_featured: boolean
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export type UserRole =
  | 'admin'
  | 'editor_in_chief'
  | 'author'
  | 'reviewer'
  | 'moderator'
  | 'user'
  | 'guest'

export interface AuthUser {
  id: number
  username: string
  email: string
  role: UserRole
  role_title: string
  permissions: string[]
}

export interface AuthResponse {
  token: string
  user: AuthUser
}

export interface RoleInfo {
  code: UserRole
  title: string
  permissions: string[]
}

export interface AdminOverview {
  users_count: number
  articles_count: number
  roles_count: number
  pending_reviews: number
  reports_count: number
}

const requestJson = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    throw new Error(error?.detail ?? `API request failed with status ${response.status}`)
  }

  return response.json()
}

export const getArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${API_URL}/api/articles`)

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  return response.json()
}

export const registerUser = (payload: {
  username: string
  email: string
  password: string
}): Promise<AuthResponse> =>
  requestJson('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

export const loginUser = (payload: { email: string; password: string }): Promise<AuthResponse> =>
  requestJson('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

export const getRoles = (): Promise<RoleInfo[]> => requestJson('/api/roles')

export const getAdminOverview = (token: string): Promise<AdminOverview> =>
  requestJson('/api/admin/overview', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
