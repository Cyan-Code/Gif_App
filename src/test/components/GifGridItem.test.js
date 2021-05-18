import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('GifGridItem renderizado correctamente', () => {
  
  const title = 'un titulo'
  const url = 'https://localhost/algo.jpg'
  const wrapper = shallow( <GifGridItem  title = {title} url = {url}/> )
  
  test('Debe renderizar el componentes de manera automática', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p')
    expect( p.text().trim() ).toBe (title)  
  })
  
  test('Debe tener el src y el titulo', () => {
    const img = wrapper.find('img')

    expect( img.prop('src')).toBe(url)
    expect( img.prop('alt')).toBe(title)

  })

  test('Debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')
    expect( className.includes('animate__fadeIn')).toBe(true)
  })
  
})

