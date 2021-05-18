import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas sobre el componente AddCategory', () => {
  
  const setCategories = jest.fn();
  let wrapper = shallow (<AddCategory setCategories={setCategories}/>)

  beforeEach (() => {
    jest.clearAllMocks()
    wrapper = shallow (<AddCategory setCategories={setCategories}/>)
  })

  test('Debe renderizarse de manera correcta', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de cambiar la caja de texto', () => {

  /*   const input = wrapper.find('input')
    const value = 'hola mundo'
    input.simulate('change', { target: {value} })
 */
  })

  test('No debe de postear la información onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'hola mundo'
    const input = wrapper.find('input')
    input.simulate('change', { target: {value} })
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    expect(setCategories).toHaveBeenCalled()
    expect(input.text().trim()).toBe('')
  })
  
  
})


