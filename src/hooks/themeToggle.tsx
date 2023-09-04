import React from 'react'

type ThemeToggleProps = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const themeClassName = theme === 'light' ? 'light-mode' : 'dark-mode'

  const buttonStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    position: 'fixed',
    border: 'none',
    borderRadius: '50%',
    top: '5%',
    left: '95%',
    transform: 'translate(-50%, -50%)',
    color: theme === 'light' ? 'white' : 'black',
    backgroundColor: theme === 'light' ? 'black' : 'white',
  }

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyle}
      className={`themeToggle ${themeClassName}`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
