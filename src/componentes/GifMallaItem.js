import React from 'react'

const GifMallaItem = ( { titulo, url } ) => {
    return (
        <>
            <img src={ url } alt={ titulo }/>
            <p> { titulo } </p>
        </>
    )
}

export default GifMallaItem
