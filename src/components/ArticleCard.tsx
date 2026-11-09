import { Link } from 'react-router'
import type { Article } from '../types'

interface ArticleCardProps {
  article: Article
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    // Toute la carte est un lien vers /articles/:id
    <Link to={'/articles/' + article.id} className="article-card">
      <h3>{article.title}</h3>
      <p>Catégorie : {article.category}</p>
      <p>Auteur : {article.author === '' ? 'Anonyme' : article.author}</p>
      {/* Date lisible à partir du texte enregistré */}
      <p>Créé le {new Date(article.createdAt).toLocaleDateString()}</p>
    </Link>
  )
}

export default ArticleCard
