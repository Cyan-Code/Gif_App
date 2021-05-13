import React, { useEffect, useState } from 'react'
import { GifGrid } from './GifGridItem';

export const GiffGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs()
  }, []);

  const getGifs = async() => {
    const url = 'http://api.giphy.com/v1/gifs/search?q=OnePunch&limit=10&api_key=06JVgbCCAEDEX3x1OCPstMV1IejYv9Ed'
    const resp = await fetch( url )
    const { data } = await resp.json()

    const gifs = data.map ( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      } 
    })
    // Agregar teoria de Hooks en Anki
    setImages(gifs)
  };
 
  return (
    <>
    <h3> {category} </h3>
    <div className="card-grid">
      <ol>
        <li>
          {
            images.map ( img => (
              <GifGrid
                key = { img.id }
                { ...img }
              />
            ))
          }
        </li>
      </ol>
    </div>
    </>
  )
}
