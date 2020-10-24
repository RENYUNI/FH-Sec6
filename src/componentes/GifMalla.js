import React, { useState, useEffect } from 'react'

const GifMalla = ( { atributo } ) => {

   const [imagenes, setImagenes] = useState([])

    useEffect( () => {
        getGifs()
    }, [] )

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

        setImagenes(gifs)
    }

    return (
        <>
            <h3> { atributo } </h3>  
            <ol>
                { 
                    imagenes.map( ({id, titulo}) => 
                        <li key= {id}> {titulo} </li>
                    ) 
                }
            </ol>
        </>
    )
}

export default GifMalla
