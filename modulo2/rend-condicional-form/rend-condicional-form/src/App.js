import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa 1/Etapa1.js'
import Etapa2 from './components/Etapa 2/Etapa2.js'
import Etapa3 from './components/Etapa 3/Etapa3.js'
import Agradecimento from './components/Agradecimento/Agradecimento.js'
import React, { Component } from 'react'







export default class App extends Component {
  state = {
    pagina:""
  }
  
trocaDePagina = (pagina) => {
    if( pagina === "Etapa1"){
      return <Etapa1 />
    } else if (this.state.pagina === "Etapa2"){
      return <Etapa2 />
    } else if (this.state.pagina === "Etapa3"){
      return <Etapa3 />
    } else if (this.state.pagina === "Agradecimento"){
      return <Agradecimento />
    } else {
      return <p>Bem vindo ao formulário do Soares</p>
    }
  }
  render() {
    return (
      <div className="App">
        {/* <Etapa1 /> */}
        {this.trocaDePagina()}
        <button onClick={() => this.trocaDePagina("Etapa1")}>Próxima Etapa</button>
        {/* <Etapa2 /> */}
        {/* <Etapa3 /> */}
        {/* <Agradecimento /> */}
    </div>
    )
  }
}
