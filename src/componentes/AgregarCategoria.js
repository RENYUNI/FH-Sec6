import React, {useState} from 'react'

const AgregarCategoria = props => {

    const [valorInput, setValorInput] = useState('Hola Mundo')

    const cambiar = (e) => {
        setValorInput( e.target.value )
    }

    const enviar = (e) => {
        e.preventDefault()
        console.log('Se envió: ' + valorInput)  
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

export default AgregarCategoria
