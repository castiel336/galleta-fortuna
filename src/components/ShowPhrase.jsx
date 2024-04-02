import React from 'react'

const ShowPhrase = ({phrase}) => {
  const objStyles = {
    backgroundImage:`url(../fortuna1/rectangle.svg)`
  }
  return (
    <div className='text'>
        <p className='text__phrase'>
        {phrase.phrase}
      </p>
    </div>
  )
}

export default ShowPhrase
