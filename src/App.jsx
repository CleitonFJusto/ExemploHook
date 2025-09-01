import { use, useState } from 'react'
import './App.css'

function App() {
  

  var nome = "Cleiton?";
  const [name, setName] = useState();


  function mudarNome(event){
    nome = event.target.value;

  }
  return (
    <>
    <p>Inform seu nome</p>
    <input onChange={mudarNome}/>


    <p>{nome}</p>
    <p>Agora via useState : </p>

      
    </>
  )
}

export default App
