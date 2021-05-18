import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el Hook useFetchGifs', () => {
  test('Debe de retornar el estado inicial', async() => {

    const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('One Punch') )
    const {data, loading} = result.current

    await waitForNextUpdate()

    expect( loading ).toBe(true)
    expect( data ).toEqual([])   

  })

  test('Debe de retornar um arreglo de imgs y el loading en false', async() => {

    const {result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('One Punch') )
    await waitForNextUpdate()

    const {data, loading} = result.current
    expect( loading ).toBe(false)
    expect( data.length ).toBe(10)   
    

  })
  
  
})
