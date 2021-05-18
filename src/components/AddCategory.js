import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {
  
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue (event.target.value)
    console.log('handleInputChange llamado')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length > 1) {
      setCategories(cats => [ inputValue, ...cats ])
      setInputValue('')  
      console.log(inputValue)    
    }
  }

  return (
    <form onSubmit = { handleSubmit }>
      <input
        type = "text"
        value = { inputValue }
        onChange = { handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

