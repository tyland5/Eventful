import React from 'react'

const PreviewImages = ({images}) => {
  return (
    <div>
        {images.map(image =>{
            return <img className='preview-images' src={image} alt= "uploaded" />
        })}
    </div>
  )
}

export default PreviewImages
