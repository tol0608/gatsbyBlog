import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const useThemeToggle = (): { theme: Theme; toggleTheme: () => void } => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    }

    document.body.className = `theme-${theme}`
  }, [theme])

  return { theme, toggleTheme }
}

export default useThemeToggle
