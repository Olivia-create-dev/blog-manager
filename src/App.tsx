import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NewArticlePage from './pages/NewArticlePage'
import ArticlesPage from './pages/ArticlesPage'
import ArticleDetailPage from './pages/ArticleDetailPage'
import useLocalStorage from './hooks/useLocalStorage'
import type { Article, ArticleFormData } from './types'

function App() {
  // Liste des articles, enregistrée dans le localStorage
  const [articles, setArticles] = useLocalStorage<Article[]>('articles', [])

  // Crée l'article complet : id et date générés automatiquement
  function addArticle(data: ArticleFormData) {
    // Sécurité : sans catégorie, l'article n'est pas créé
    if (data.category === '') {
      return
    }
    const newArticle: Article = {
      ...data,
      category: data.category,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }
    setArticles([...articles, newArticle])
  }

  // Remplace les champs modifiés de l'article qui a cet id
  function updateArticle(id: number, data: ArticleFormData) {
    if (data.category === '') {
      return
    }
    const category = data.category
    setArticles(
      articles.map((article) =>
        article.id === id
          ? { ...article, ...data, category: category }
          : article,
      ),
    )
  }

  // Garde tous les articles sauf celui qui a cet id
  function deleteArticle(id: number) {
    setArticles(articles.filter((article) => article.id !== id))
  }

  return (
    // BrowserRouter active la navigation entre les pages
    <BrowserRouter>
      <Layout>
        {/* Routes affiche la page qui correspond à l'adresse */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/articles"
            element={<ArticlesPage articles={articles} />}
          />
          <Route
            path="/articles/:id"
            element={
              <ArticleDetailPage
                articles={articles}
                onUpdate={updateArticle}
                onDelete={deleteArticle}
              />
            }
          />
          <Route
            path="/new"
            element={<NewArticlePage onCreate={addArticle} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
