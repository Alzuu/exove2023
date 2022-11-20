import ThemeToggle from './components/ThemeToggle'
import ImageHandler from './components/ImageHandler'
import ImageCarousel from './components/ImageCarousel'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1>Helvetinjärvi 2022</h1>
        <ThemeToggle></ThemeToggle>
      </header>
      <ImageCarousel images={ImageHandler}></ImageCarousel>
    </div>
  )
}

export default App
