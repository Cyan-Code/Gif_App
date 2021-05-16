import {getGifs} from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {
  test('Debe de traer 10 elementos', async () => {
    const getgifs = await getGifs('One Punch')
    expect( getgifs.length ).toBe(10)
  })
  test('Debe recibir una categoria', async() => {
    const gifs = await getGifs('')
    expect ( gifs.length ).toBe(0)
  })
  
  
})
