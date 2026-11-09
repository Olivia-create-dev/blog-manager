import { useNavigate } from 'react-router'
import ArticleForm from '../components/ArticleForm'
import type { ArticleFormData } from '../types'

interface NewArticlePageProps {
  onCreate: (data: ArticleFormData) => void
}

function NewArticlePage({ onCreate }: NewArticlePageProps) {
  // Used to redirect the user to another page after creating an article
  const navigate = useNavigate()

  function handleSave(data: ArticleFormData) {
    onCreate(data)
    // Used to redirect the user to another page after creating an article
    navigate('/articles')
  }

  return (
    <div>
      <h2>Nouvel article</h2>
      {/* The form to create an article is totally empty at first*/}
      <ArticleForm
        initialData={{ title: '', category: '', content: '', author: '' }}
        onSave={handleSave}
      />
    </div>
  )
}

export default NewArticlePage
