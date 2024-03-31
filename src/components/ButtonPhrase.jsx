import React from 'react';
import arrayPhrases from '../utils/phrases';
import getRandom from '../services/getRandom';
import arrayImg from '../utils/images.json';
const ButtonPhrase = ({setPhrase, setimg}) => {

  const handlePhrase = () => {
    setPhrase(getRandom(arrayPhrases));
    setimg(getRandom(arrayImg));
  }

  return (
    <button onClick={handlePhrase} className='btn'>
      Probar mi suerte
    </button>


  )
}

export default ButtonPhrase
