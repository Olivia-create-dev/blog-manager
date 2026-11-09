import { useState, useMemo } from 'react'
import SearchBar from '../components/SearchBar'
import ArticleList from '../components/ArticleList'
import type { Article, Category, SortOrder } from '../types'

interface ArticlesPageProps {
  articles: Article[]
}

function ArticlesPage({ articles }: ArticlesPageProps) {
  const [search, setSearch] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<SortOrder>('recent')
  const [category, setCategory] = useState<Category | 'all'>('all')

  // Liste filtrée et triée, recalculée seulement quand un filtre ou les articles changent
  const visibleArticles = useMemo<Article[]>(() => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'all' || article.category === category),
    )
    // Les dates enregistrées se comparent comme du texte (format AAAA-MM-JJ...)
    return filtered.sort((a, b) =>
      sortOrder === 'recent'
        ? b.createdAt.localeCompare(a.createdAt)
        : a.createdAt.localeCompare(b.createdAt),
    )
  }, [articles, search, sortOrder, category])

  return (
    <div>
      <h2>Tous les articles</h2>
      <SearchBar
        search={search}
        sortOrder={sortOrder}
        category={category}
        onSearchChange={setSearch}
        onSortChange={setSortOrder}
        onCategoryChange={setCategory}
      />
      <ArticleList articles={visibleArticles} />
    </div>
  )
}

export default ArticlesPage
