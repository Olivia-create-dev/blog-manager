import ArticleCard from './ArticleCard'
import type { Article } from '../types'

interface ArticleListProps {
  articles: Article[]
}

function ArticleList({ articles }: ArticleListProps) {
  // Liste vide : message à la place des cartes
  if (articles.length === 0) {
    return <p>Aucun article à afficher.</p>
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
