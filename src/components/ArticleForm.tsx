import { useState } from 'react'
import { categories, type ArticleFormData, type FormErrors } from '../types'

interface ArticleFormProps {
  initialData: ArticleFormData
  onSave: (data: ArticleFormData) => void
}

function ArticleForm({ initialData, onSave }: ArticleFormProps) {
  const [form, setForm] = useState<ArticleFormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})

  // Met à jour le champ dont le nom est dans l'attribut name
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Empêche le rechargement de la page
    e.preventDefault()
    const newErrors: FormErrors = {}

    // trim() retire les espaces : un champ rempli d'espaces compte comme vide
    if (form.title.trim() === '') {
      newErrors.title = 'Le titre est obligatoire.'
    }
    if (form.category === '') {
      newErrors.category = 'La catégorie est obligatoire.'
    }
    if (form.content.trim() === '') {
      newErrors.content = 'Le contenu est obligatoire.'
    }

    setErrors(newErrors)
    // Aucune erreur : on envoie les données au parent
    if (Object.keys(newErrors).length === 0) {
      onSave(form)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre
        <input name="title" value={form.title} onChange={handleChange} />
      </label>
      {errors.title && <p className="error">{errors.title}</p>}

      <label>
        Catégorie
        {/* Liste déroulante : une option par catégorie */}
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Choisir une catégorie</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      {errors.category && <p className="error">{errors.category}</p>}

      <label>
        Auteur
        <input name="author" value={form.author} onChange={handleChange} />
      </label>

      <label>
        Contenu
        <textarea name="content" value={form.content} onChange={handleChange} />
      </label>
      {errors.content && <p className="error">{errors.content}</p>}

      <button type="submit">Enregistrer</button>
    </form>
  )
}

export default ArticleForm
