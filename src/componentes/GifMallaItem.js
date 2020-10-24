import React from 'react'

const GifMallaItem = ( { titulo, url } ) => {
    return (   
        <div className="tarjeta">
            <img src={ url } alt={ titulo }/>
            <p> { titulo } </p>
        </div>
    )
}

export default GifMallaItem
