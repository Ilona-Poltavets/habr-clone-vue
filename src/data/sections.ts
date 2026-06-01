export type SectionTone = 'games' | 'code' | 'movies' | 'series'

export interface SectionCategory {
  slug: string
  title: string
  description: string
}

export interface MainSection {
  slug: SectionTone
  title: string
  label: string
  description: string
  categories: SectionCategory[]
}

export const mainSections: MainSection[] = [
  {
    slug: 'games',
    title: 'Игры',
    label: 'Gaming',
    description: 'Новости индустрии, релизы, обзоры, железо и киберспорт.',
    categories: [
      {
        slug: 'news',
        title: 'Новости',
        description: 'Анонсы, переносы, обновления и главные события игровой индустрии.',
      },
      {
        slug: 'reviews',
        title: 'Обзоры',
        description: 'Рецензии на новые игры, ранний доступ и крупные дополнения.',
      },
      {
        slug: 'guides',
        title: 'Гайды',
        description: 'Советы по прохождению, билды, настройки и полезные механики.',
      },
      {
        slug: 'esports',
        title: 'Киберспорт',
        description: 'Турниры, команды, трансферы и расписание важных матчей.',
      },
    ],
  },
  {
    slug: 'code',
    title: 'Код',
    label: 'Code',
    description: 'Frontend, backend, DevOps, AI-инструменты и инженерные практики.',
    categories: [
      {
        slug: 'news',
        title: 'Новости',
        description: 'Релизы языков, фреймворков, библиотек и платформ разработки.',
      },
      {
        slug: 'frontend',
        title: 'Frontend',
        description: 'Vue, React, CSS, производительность интерфейсов и дизайн-системы.',
      },
      {
        slug: 'backend',
        title: 'Backend',
        description: 'API, базы данных, архитектура сервисов и надежность.',
      },
      {
        slug: 'devops',
        title: 'DevOps',
        description: 'CI/CD, контейнеры, мониторинг и инфраструктура.',
      },
    ],
  },
  {
    slug: 'movies',
    title: 'Фильмы',
    label: 'Movies',
    description: 'Премьеры, трейлеры, касса, критика и подборки кино.',
    categories: [
      {
        slug: 'news',
        title: 'Новости',
        description: 'Премьеры, переносы, трейлеры и сделки студий.',
      },
      {
        slug: 'reviews',
        title: 'Рецензии',
        description: 'Разборы новых фильмов без лишнего шума.',
      },
      {
        slug: 'box-office',
        title: 'Касса',
        description: 'Сборы, рекорды, провалы и аналитика проката.',
      },
      {
        slug: 'collections',
        title: 'Подборки',
        description: 'Что посмотреть по жанрам, настроению и авторам.',
      },
    ],
  },
  {
    slug: 'series',
    title: 'Сериалы',
    label: 'Series',
    description: 'Новые сезоны, стриминги, эпизоды, рейтинги и рекомендации.',
    categories: [
      {
        slug: 'news',
        title: 'Новости',
        description: 'Продления, закрытия, даты премьер и новости платформ.',
      },
      {
        slug: 'episodes',
        title: 'Эпизоды',
        description: 'Разборы серий, финалов сезонов и важных поворотов.',
      },
      {
        slug: 'streaming',
        title: 'Стриминги',
        description: 'Netflix, HBO, Amazon, Apple TV и локальные сервисы.',
      },
      {
        slug: 'watchlist',
        title: 'Что смотреть',
        description: 'Короткие рекомендации для вечера и длинных выходных.',
      },
    ],
  },
]

export const getMainSection = (slug: string | string[]) => {
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug

  return mainSections.find((section) => section.slug === normalizedSlug)
}
