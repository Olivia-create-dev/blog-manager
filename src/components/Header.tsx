import { Link } from 'react-router'
import type { Theme } from '../types'
import { Moon, Sun } from 'lucide-react'

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header>
      <h1>Blog Manager</h1>
      {/*Navigation links */}
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/new">Nouvel article</Link>
        {/*The text on the button shows which theme is expected on click*/}
        <button className="theme-toggle" onClick={onToggleTheme}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          {theme === 'light' ? 'Sombre' : 'Clair'}
        </button>
      </nav>
    </header>
  )
}

export default Header
