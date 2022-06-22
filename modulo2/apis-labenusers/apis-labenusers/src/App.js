import React from "react";
import TelaInicial from "./components/TelaInicial.js";
import TelaDeDetalhes from "./components/TelaDeDetalhes.js";

export default class App extends React.Component{
  state = {
    telaAtual:"inicial"
  }
  escolheTela = () =>{
    switch(this.state.telaAtual){
      case "inicial":
        return <TelaInicial irParaDetalhes={this.irParaDetalhes}/>
        case "detalhes":
          return<TelaDeDetalhes irParaInicio={this.irParaInicio}/>
        default:
          return <div><p>Erro! Página não encontrada</p></div>  
    }
  }
  
  irParaInicio = () => {
  this.setState({telaAtual:"inicial"})
  }
  
  irParaDetalhes = () => {
  this.setState({telaAtual:"detalhes"})
  }

  render(){
    return (
      <div>
        {this.escolheTela()}
      </div>
    );
  }
}

