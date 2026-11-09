import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import EditModal from '../components/EditModal'
import type { Article, ArticleFormData } from '../types'

interface ArticleDetailPageProps {
  articles: Article[]
  onUpdate: (id: number, data: ArticleFormData) => void
  onDelete: (id: number) => void
}

function ArticleDetailPage({
  articles,
  onUpdate,
  onDelete,
}: ArticleDetailPageProps) {
  // Récupère le :id de l'adresse (toujours du texte)
  const { id } = useParams()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState<boolean>(false)

  // Cherche l'article dont l'id correspond (Number convertit le texte en nombre)
  const article = articles.find((a) => a.id === Number(id))

  // Aucun article avec cet id
  if (article === undefined) {
    return (
      <div>
        <p>Article introuvable.</p>
        <Link to="/articles">Retour aux articles</Link>
      </div>
    )
  }

  function handleSave(data: ArticleFormData) {
    if (article !== undefined) {
      onUpdate(article.id, data)
    }
    setIsEditing(false)
  }

  function handleDelete() {
    // confirm affiche une fenêtre OK / Annuler et renvoie true si OK
    if (article !== undefined && confirm('Supprimer cet article ?')) {
      onDelete(article.id)
      navigate('/articles')
    }
  }

  return (
    <div>
      <Link to="/articles">← Retour aux articles</Link>
      <h2>{article.title}</h2>
      <p>
        {article.category} ·{' '}
        {article.author === '' ? 'Anonyme' : article.author} ·{' '}
        {new Date(article.createdAt).toLocaleDateString()}
      </p>
      <p>{article.content}</p>
      <div className="actions">
        <button onClick={() => setIsEditing(true)}>Modifier</button>
        <button className="danger" onClick={handleDelete}>
          Supprimer
        </button>
      </div>
      {/* La modale ne s'affiche que pendant la modification */}
      {isEditing && (
        <EditModal
          article={article}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  )
}

export default ArticleDetailPage
