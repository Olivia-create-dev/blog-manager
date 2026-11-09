import { useState, useEffect } from 'react'

// T : type générique, déduit de la valeur initiale
function useLocalStorage<T>(key: string, initialValue: T) {
  // Lecture du localStorage une seule fois, au premier rendu
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      // Texte enregistré invalide : retour à la valeur initiale
      return initialValue
    }
  })

  // Écriture dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}

export default useLocalStorage
