function Footer() {
  // Current year updated in real time
  const year = new Date().getFullYear()

  return (
    <footer>
      <p>© {year} Blog Manager by Olivia TOSSOU </p>
    </footer>
  )
}

export default Footer
