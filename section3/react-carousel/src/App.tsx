import ImageHandler from './components/ImageHandler'
import ImageCarousel from './components/ImageCarousel'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Helvetinjärvi 2022</h1>
      <ImageCarousel images={ImageHandler}></ImageCarousel>
    </div>
  )
}

export default App
