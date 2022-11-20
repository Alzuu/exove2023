import { useState, useCallback, useEffect } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import img1 from './assets/image1.jpeg'
import img2 from './assets/image2.jpeg'
import img3 from './assets/image3.jpeg'
import img4 from './assets/image4.jpeg'
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState(0)

  // If value of current image is the same as the index of the last image
  // in the array then cycle back to the first image. Otherwise increase image
  // index.
  const nextImage = useCallback(() => {
    setCurrentImage((currentImage) =>
      currentImage === numberOfImages - 1 ? 0 : currentImage + 1
    )
  }, [])

  // If value of current image is equal to zero, cycle back to the last image
  // in the array. Otherwise, decrease image index.
  const prevImage = useCallback(() => {
    setCurrentImage((currentImage) =>
      currentImage === 0 ? numberOfImages - 1 : currentImage - 1
    )
  }, [])

  const changeImageWithKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevImage()
      } else if (event.key === 'ArrowRight') {
        nextImage()
      }
    },
    [nextImage, prevImage]
  )

  useEffect(() => {
    document.addEventListener('keydown', changeImageWithKey)
    return () => document.removeEventListener('keydown', changeImageWithKey)
  }, [changeImageWithKey])

  const images = [img1, img2, img3, img4]
  const numberOfImages = images.length

  return (
    <div className='App'>
      <h1>Helvetinjärvi 2022</h1>
      <div className='carousel'>
        <button onClick={prevImage} className='arrow arrow-left'>
          <FiArrowLeft aria-label='Previous Image'></FiArrowLeft>
        </button>
        <button onClick={nextImage} className='arrow arrow-right'>
          <FiArrowRight aria-label='Next Image'></FiArrowRight>
        </button>
        {images.map((image, index) => {
          return (
            <div
              className={index === currentImage ? 'slide active' : 'slide'}
              key={index}
            >
              {index === currentImage && (
                <img
                  src={image}
                  alt='Autumn landscape in Helventinjärvi'
                  className='image'
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
