import { use, useState } from 'react'
import './App.css'

function App() {
  

  var nome = "Cleiton";
  const [name, setName] = useState("Valor inicial");


  function mudarNome(event){
    nome = event.target.value;

    setName(event.target.value)

  }
  return (
    <>
    <p>Inform seu nome</p>
    <input onChange={mudarNome}/>


    <p>{nome}</p>
    <p>Agora via useState : {name}</p>

      
    </>
  )
}

export default App
