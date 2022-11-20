import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  const root = document.documentElement

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    root.classList.toggle('dark-theme')
  }
  return (
    <>
      <button className='theme-toggle' onClick={toggleTheme}>
        {darkMode ? (
          <FiMoon aria-label='Toggle dark theme'></FiMoon>
        ) : (
          <FiSun aria-label='Toggle light theme'></FiSun>
        )}
      </button>
    </>
  )
}

export default ThemeToggle
