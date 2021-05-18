import React from 'react';
import { GiffGrid } from '../../components/GiffGrid';
import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre <GiffGrid />', () => {
  
  const category = 'hola'

  test('Debe renderizar el componente de manera correcta', () => {

  })
  
  //Pruebas sobre useFetchGifs
  test('Debe de mostrar items cuando se carga imágenes de useFetch', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/algo.png',
      title: 'cualeuri cosa'
    },
    {
      id: 'A',
      url: 'https://localhost/algo.png',
      title: 'cualeuri cosa'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: true
    })

    const wrapper = shallow (<GiffGrid category={ category }/>)

    expect( wrapper.find('p').exists() ).toBe(true)
    expect( wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
  

})

