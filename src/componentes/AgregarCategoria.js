import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AgregarCategoria = ( { cat } ) => {

    const [valorInput, setValorInput] = useState('')

    const cambiar = (e) => {
        setValorInput( e.target.value )
    }

    const enviar = (e) => {
        e.preventDefault()
        if (valorInput !== '') {
            cat(arg=>[valorInput, ...arg, ])
            setValorInput('')
        } 
    }

    return (
        <form onSubmit={ enviar }>
            <input 
                type="text"
                value={ valorInput } 
                onChange={ cambiar }
            />
        </form>
        
    )
}

AgregarCategoria.propTypes = {
    cat: PropTypes.func.isRequired
}

export default AgregarCategoria
