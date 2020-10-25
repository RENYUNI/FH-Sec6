import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifMallaItem from './GifMallaItem'

const GifMalla = ( { atributo } ) => {

    const { datos, cargando } = useFetchGifs( atributo )

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { atributo } </h3>  

            { cargando && <p className="animate__animated animate__flash"> Cargando ... </p> }

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
