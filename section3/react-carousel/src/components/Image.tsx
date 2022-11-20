interface IImage {
  image: string
  index: number
  currentImage: number
}

function Image({ image, index, currentImage }: IImage) {
  return (
    <>
      {index === currentImage && (
        <img
          src={image}
          alt='Autumn landscape in Helventinjärvi'
          className='image'
        />
      )}
    </>
  )
}

export default Image
