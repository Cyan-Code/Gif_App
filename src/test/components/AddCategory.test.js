import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas sobre el componente AddCategory', () => {
  
  const setCategories = jest.fn();
  const wrapper = shallow (<AddCategory setCategories={setCategories}/>)

  test('Debe renderizarse de manera correcta', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de cambiar la caja de texto', () => {

    const input = wrapper.find('input')
    const value = 'hola mundo'
    input.simulate('change', { target: {value} })

  })

  test('No debe de postear la información onSubmit', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect(setCategories).not.toHaveBeenCalled()

  })
  

  
})


