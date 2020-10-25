import { useState, useEffect } from 'react'
import { getGifs } from '../apoyos/getGifs'

export const useFetchGifs = ( atributo ) => {
    
    const [state, setstate] = useState(
        {
            datos: [],
            cargando: true,
        }
    )

    useEffect(() => {
        getGifs( atributo ).then(( p )=>{
            setstate(
                {
                    datos: p,
                    cargando: false,
                }
            )
        }
       )
    }, [ atributo ])
    
    return state
}
