import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AgregarCategoria from './componentes/AgregarCategoria'

const GifExpertApp = props => {

    const [categorias, setCategorias] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'])

    const agregar = () =>{
        setCategorias( arg => [ ...arg, 'Inuyasha' ])
    }

    return (
        <>
           <h2>GifExpertApp</h2> 
           <AgregarCategoria />
           <hr/>

            <button onClick={ agregar }>Agregar</button>

            <ol>
               { categorias.map(e => <li key={ e }>{ e }</li>)}
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
