import React, {useState} from 'react'
import PropTypes from 'prop-types'

const GifExpertApp = props => {

    const [categorias, setCategorias] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'])

    const agregar = () =>{
        setCategorias( arg => [ ...arg, 'Inuyasha' ])
    }

    return (
        <>
           <h2>GifExpertApp</h2> 
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
