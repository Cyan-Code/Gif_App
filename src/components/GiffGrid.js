import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GiffGrid = ({ category }) => {

  const {loading, data} = useFetchGifs(category)

  return (
    <>
    <h3 className="card animate__fadeIn"> {category} </h3>
    
    { loading && <p className = "card animate__flash">Loading</p>}

    <div className="card-grid">
      <ol>
        <li>
          {
            data.map ( img => (
              <GifGridItem
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
