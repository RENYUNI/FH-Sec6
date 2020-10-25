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
            setTimeout(() => {
                setstate(
                    {
                        datos: p,
                        cargando: false,
                    }
                )
            }, 3000);
        }
       )
    }, [ atributo ])
    
    return state
}
