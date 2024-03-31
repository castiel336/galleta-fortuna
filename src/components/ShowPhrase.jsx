import React from 'react'

const ShowPhrase = ({phrase}) => {
  const objStyles = {
    backgroundImage:`url(../public/fortuna1/rectangle.svg)`
  }
  return (
    <div className='text'>
      <div className='text__img'>  
        <p className='text__phrase'>
        {phrase.phrase}
      </p>
      </div>
    
      {/* <p className='text__aut'>
        Fuente:{phrase.author}
      </p> */}
    </div>
  )
}

export default ShowPhrase
