import React, {useState, useEffect} from "react";
import Inicio from "./pages/Inicio"
import Login from "./pages/Login";
import Viagens from "./pages/Viagens";

function App() {
  
  const [tela, setTela] = useState("inicio");


  const telaAtual = () => {
    switch(tela){
      case 'inicio':
         return <Inicio/>
      case 'login':
        return <Login/>
      case 'viagens':
        return  <Viagens/>
        default:
            
    }
  }
    const handleLogin = () => {
        setTela(tela - tela.value)
        setTela(tela + "login")
    }
  
    const handleInicio = () => {
        setTela(tela - tela.value) 
        setTela(tela + "inicio")
    }
  
    const handleViagens = () => {
        setTela(tela - tela.value)
        setTela(tela + 'viagens')
    }

    console.log(tela)
  return (
    <div>
      <h1>Oi</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleInicio}>Inicio</button>
      <button onClick={handleViagens}>Viagens</button>
      {telaAtual()}
    </div>
  );
}

export default App;
