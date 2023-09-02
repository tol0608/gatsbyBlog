import React from 'react'

type ThemeToggleProps = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const themeClassName = theme === 'light' ? 'light-mode' : 'dark-mode'

  const buttonStyle: React.CSSProperties = {
    width: '150px',
    height: '65px',
    position: 'fixed',
    border: 'none',
    borderRadius: '50px',
    top: '90%',
    left: '90%',
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
      {theme === 'light' ? '다크 모드 🌙' : '라이트 모드 ☀️'}
    </button>
  )
}

export default ThemeToggle
