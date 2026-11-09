// Categories of articles in the blog
export type Category =
  | 'Apprentissage'
  | 'Carrière'
  | 'Projets'
  | 'Technologie'
  | 'Loisirs'
  | 'Voyages'
  | 'Culture'
  | 'Autre'

// This array contains all the categories of articles in the blog
export const categories: Category[] = [
  'Apprentissage',
  'Carrière',
  'Projets',
  'Technologie',
  'Loisirs',
  'Voyages',
  'Culture',
  'Autre',
]

// This interface defines a model for each article in the blog
export interface Article {
  id: number
  title: string
  category: Category
  content: string
  author: string
  createdAt: string
}
// Form fields required to create or edit an article in the form
export interface ArticleFormData {
  title: string
  category: Category | '' // '' while no category has beeen selected yet
  content: string
  author: string
}
// Error messages for the form fields when creating or editing an article
export interface FormErrors {
  title?: string
  category?: string
  content?: string
}

// Order in wich articles will be sorted
export type SortOrder = 'recent' | 'old'

// Theme of the blog to be used in the application
export type Theme = 'light' | 'dark'
