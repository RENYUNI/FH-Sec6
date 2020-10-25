import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../apoyos/getGifs'
// import GifMallaItem from './GifMallaItem'

const GifMalla = ( { atributo } ) => {

    // const [imagenes, setImagenes] = useState([])

    const { cargando } = useFetchGifs()

    // useEffect( () => {
    //     getGifs( atributo ).then( setImagenes )
    // }, [ atributo ] )

    return (
        <>
            <h3> { atributo } </h3>  

            { cargando ? 'Cargando ...' : 'Datos cargados' }
            {/* <div className="malla-tarjeta">
                { 
                    imagenes.map( e => 
                        <GifMallaItem 
                            key = { e.id } 
                            { ...e }
                        />
                    ) 
                }
            </div> */}
            
        </>
    )
}

export default GifMalla
