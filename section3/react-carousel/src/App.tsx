import { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import ImageHandler from './components/ImageHandler'
import ImageCarousel from './components/ImageCarousel'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const root = document.documentElement

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    root.classList.toggle('dark-theme')
  }

  return (
    <div className='App'>
      <section className='header'>
        <h1>Helvetinjärvi 2022</h1>
        {darkMode ? (
          <FiSun className='theme-toggle' onClick={toggleTheme}></FiSun>
        ) : (
          <FiMoon className='theme-toggle' onClick={toggleTheme}></FiMoon>
        )}
      </section>
      <ImageCarousel images={ImageHandler}></ImageCarousel>
    </div>
  )
}

export default App
