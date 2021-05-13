import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiffGrid } from './components/GiffGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch'])  
    return (
      <>
        <h2>GifExpertApp</h2>
          <AddCategory  setCategories={ setCategories }/>
        <hr/>
        <ol>
          {
            categories.map( category => (
              <GiffGrid
                key = { category }
                category = { category }
              />
            ))
          }
        </ol>
      </>
    )
}

export default GifExpertApp
