import React, {useEffect, useState} from "react";
import Inicio from "./pages/Inicio.js";
import Matches from "./pages/Matches.js";




function App() {

  const [tela, setTela] = useState('1')

  const telaAtual = () => {
    switch(tela){
      case '1':
        return <Inicio/>
      case '2':
        return <Matches/>  
    }
  }

  return (
    <div>
      <h1>AstroMatch</h1>
      <button>Ir para matches</button>
      <br/>
      {telaAtual}
    </div>
  );
}

export default App;