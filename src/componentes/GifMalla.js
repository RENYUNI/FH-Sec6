import React, { useState, useEffect } from 'react'
import GifMallaItem from './GifMallaItem'

const GifMalla = ( { atributo } ) => {

   const [imagenes, setImagenes] = useState([])

    useEffect( () => {
        getGifs()
    }, [] )

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(atributo) }&limit=10&api_key=Q2QGdfEPvD3rj4aBVrNFQFPjnwHFhmHK`
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
            <div className="malla-tarjeta">
                { 
                    imagenes.map( e => 
                        <GifMallaItem 
                            key = { e.id } 
                            { ...e }
                        />
                    ) 
                }
            </div>
            
        </>
    )
}

export default GifMalla
