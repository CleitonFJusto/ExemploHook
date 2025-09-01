import { use, useState } from 'react'
import './App.css'

function App() {



  var sobreNome = "Justo";
  var nome = "Cleiton";
  const [name, setName] = useState("Valor inicial");
  const [sobreName, setSobreName] = useState("Valor inicial");


  function mudarNome(event){
    nome = event.target.value;

    setName(event.target.value)

  }
  function mudarSobrenome(event){
    sobreNome = event.target.value;

    setSobreName(event.target.value)
  }
  return (
    <>
    <p>Inform seu nome</p>
    <input onChange={mudarNome}/>
    <p>Informe seu sobrenome</p>
    <input onChange={mudarSobrenome}/>


    <p>{nome}</p>
    <p>Seu nome via useState : {name}</p>
    <p>Seu sobrenome via useState : {sobreName}</p>
    

      
    </>
  )
}

export default App
