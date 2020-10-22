import React from 'react'

const GifMalla = ( { atributo } ) => {
    
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=Q2QGdfEPvD3rj4aBVrNFQFPjnwHFhmHK'
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

        console.log(gifs)
    }

    getGifs()
    
    return (
        <>
            <h3> { atributo } </h3>
        </>
    )
}

export default GifMalla
