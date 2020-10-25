import React from 'react'

const GifMallaItem = ( { titulo, url } ) => {
    return (   
        <div className="tarjeta animate__animated animate__fadeIn">
            <img src={ url } alt={ titulo }/>
            <p> { titulo } </p>
        </div>
    )
}

export default GifMallaItem
