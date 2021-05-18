import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp'

describe('Pruebas sobre <GifExpertApp />', () => {
  test('Debe coincidir con el Snapshot', () => {
    
    const wrapper = shallow (<GifExpertApp/>)
    expect ( wrapper ).toMatchSnapshot()

  })

  test('Debe de mostrar una lsta de categorias', () => {
    const categories = ['One Punch','Dragon Ball']
    const wrapper = shallow (<GifExpertApp defaultCategory={categories}/>)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GiffGrid').length).toBe(categories.length)
    
  })
  

})

