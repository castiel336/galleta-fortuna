import arrayPhrases from './utils/phrases.json'
import getRandom from './services/getRandom'
import './App.css'
import { useState } from 'react'
import ShowPhrase from './components/ShowPhrase';
import ButtonPhrase from './components/ButtonPhrase';
import arrayImg from './utils/images.json';
 
function App() {

  const [phrase, setPhrase] = useState(getRandom(arrayPhrases));
  const [img, setimg] = useState(getRandom(arrayImg))
  const objStyles = {
    backgroundImage:`url(../public/fortuna-1/fondo${img}.jpg)`
  }
  
  return (
<div className='app' style={objStyles}>
  <h1 className='app__tittle'>Galleta de la fortuna</h1>
  <ShowPhrase phrase={phrase}></ShowPhrase>
  <ButtonPhrase setPhrase={setPhrase} setimg={setimg}/>

</div>
  )
}

export default App