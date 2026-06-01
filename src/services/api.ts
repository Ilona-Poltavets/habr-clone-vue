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

export const getArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${API_URL}/api/articles`)

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  return response.json()
}
