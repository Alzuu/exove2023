import { useCallback, useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Image from './Image'

interface IImages {
  images: string[]
}

function ImageCarousel(props: IImages) {
  const [currentImage, setCurrentImage] = useState(0)

  const images = props.images
  const numberOfImages = images.length

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

  return (
    <main className='carousel'>
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
            <Image
              image={image}
              index={index}
              currentImage={currentImage}
            ></Image>
          </div>
        )
      })}
    </main>
  )
}

export default ImageCarousel
