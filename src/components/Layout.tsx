import Header from './Header'
import Footer from './Footer'
import useLocalStorage from '../hooks/useLocalStorage'
import type { Theme } from '../types'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  // Thème enregistré dans le localStorage : il reste après un rafraîchissement
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  // Passe au thème opposé
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    // La classe dark active les couleurs sombres définies dans index.css
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      {/* Contenu de la page affichée */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
