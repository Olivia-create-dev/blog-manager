import ArticleForm from './ArticleForm'
import type { Article, ArticleFormData } from '../types'

interface EditModalProps {
  article: Article
  onSave: (data: ArticleFormData) => void
  onClose: () => void
}

function EditModal({ article, onSave, onClose }: EditModalProps) {
  return (
    // Fond sombre qui recouvre toute la page
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modifier l'article</h2>
        {/* Même formulaire que la création, prérempli avec l'article */}
        <ArticleForm
          initialData={{
            title: article.title,
            category: article.category,
            content: article.content,
            author: article.author,
          }}
          onSave={onSave}
        />
        <button className="secondary" onClick={onClose}>
          Annuler
        </button>
      </div>
    </div>
  )
}

export default EditModal
