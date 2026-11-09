import { categories, type Category, type SortOrder } from '../types'

interface SearchBarProps {
  search: string
  sortOrder: SortOrder
  category: Category | 'all'
  onSearchChange: (search: string) => void
  onSortChange: (sortOrder: SortOrder) => void
  onCategoryChange: (category: Category | 'all') => void
}

// Les valeurs viennent du parent, chaque changement lui est renvoyé
function SearchBar({
  search,
  sortOrder,
  category,
  onSearchChange,
  onSortChange,
  onCategoryChange,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher par titre"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
      >
        <option value="recent">Plus récents d'abord</option>
        <option value="old">Plus anciens d'abord</option>
      </select>

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value as Category | 'all')}
      >
        <option value="all">Toutes les catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar
