import React, {useState} from 'react'
import AgregarCategoria from './componentes/AgregarCategoria'
import GifMalla from './componentes/GifMalla'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState( ['One Punch'])

    return (
        <>
           <h2>GifExpertApp</h2> 
           <AgregarCategoria cat = { setCategorias }/>
           <hr/>

            <ol>
               { 
                    categorias.map(e => 
                        <GifMalla
                            key = { e }
                            atributo = { e }
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
