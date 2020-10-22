import React, {useState} from 'react'
import AgregarCategoria from './componentes/AgregarCategoria'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'])

    return (
        <>
           <h2>GifExpertApp</h2> 
           <AgregarCategoria cat = { setCategorias }/>
           <hr/>

            <ol>
               { categorias.map(e => <li key={ e }>{ e }</li>)}
            </ol>
        </>
    )
}

export default GifExpertApp
