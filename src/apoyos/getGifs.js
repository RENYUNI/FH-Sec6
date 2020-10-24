export const getGifs = async (arg) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(arg) }&limit=10&api_key=Q2QGdfEPvD3rj4aBVrNFQFPjnwHFhmHK`
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    const { data } = datos

    const gifs = data.map( e =>{
        return {
            id: e.id,
            titulo: e.title,
            url: e.images.downsized_medium.url,
        }
    })

    return gifs
}