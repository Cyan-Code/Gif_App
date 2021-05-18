import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiffGrid } from './components/GiffGrid'

export const GifExpertApp = ( {defaultCategory = []} ) => {
  const [categories, setCategories] = useState( defaultCategory )  
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
