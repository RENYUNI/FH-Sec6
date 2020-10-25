import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifMallaItem from './GifMallaItem'

const GifMalla = ( { atributo } ) => {

    const { datos, cargando } = useFetchGifs( atributo )

    return (
        <>
            <h3> { atributo } </h3>  

            { cargando && <p> Cargando ... </p> }

            <div className="malla-tarjeta">
                { 
                    datos.map( e => 
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
