import React, { useState, useEffect } from 'react'
import { getGifs } from '../apoyos/getGifs'
import GifMallaItem from './GifMallaItem'

const GifMalla = ( { atributo } ) => {

   const [imagenes, setImagenes] = useState([])

    useEffect( () => {
        getGifs( atributo ).then( setImagenes )
    }, [ atributo ] )

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
