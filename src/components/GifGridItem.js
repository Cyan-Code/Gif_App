import React from 'react'

export const GifGridItem = ( img ) => {

  return (
    <div className="card animate__fadeIn">
      <p> {img.title} </p>
      <img src={img.url} alt={img.title} />
    </div>
  )
}