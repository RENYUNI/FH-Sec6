import { useState } from 'react'

export const useFetchGifs = () => {
    
    const [state, setstate] = useState(
        {
            datos: [],
            cargando: true,
        }
    )

    setTimeout(()=>{
        setstate({
            datos: [1, 2, 3, 4, 5],
            cargando: false,
        })
    }, 3000)
    
    return state
}
