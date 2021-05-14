
export const getGifs = async( category ) => {
  const cat = encodeURI(category)
  const url = `http://api.giphy.com/v1/gifs/search?q=${cat}&limit=10&api_key=06JVgbCCAEDEX3x1OCPstMV1IejYv9Ed`
  const resp = await fetch( url )
  const { data } = await resp.json()

  const gifs = data.map ( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    } 
  })
  
  return gifs;
};
