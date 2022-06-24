import React from "react"
import CriarPlaylist from "./pages/CriarPlaylist"
import ExcluirPlaylist from "./pages/ExcluirPlaylist"
import MinhaBiblioteca from "./pages/MinhaBiblioteca"
import Inicio from "./pages/Inicio"
import styled from "styled-components"
import AddMusica from "./pages/AddMusicas"

export default class App extends React.Component {

  state = {
    telaAtual: "inicio"
  }

  trocarDeTela = () => {
    switch(this.state.telaAtual){
      case "inicio":
        return <Inicio 
        irParaBiblioteca={this.irParaBiblioteca} irParaCriar={this.irParaCriar} irParaExcluir={this.irParaExcluir} irParaAddMusicas={this.irParaAddMusicas}/>
      case "excluir":
      return <ExcluirPlaylist 
      irParaBiblioteca={this.irParaBiblioteca} irParaCriar={this.irParaCriar} irParaInicio={this.irParaInicio} irParaAddMusicas={this.irParaAddMusicas}/>
      case "criar":
      return <CriarPlaylist 
      irParaBiblioteca={this.irParaBiblioteca} irParaInicio={this.irParaInicio} irParaExcluir={this.irParaExcluir} irParaAddMusicas={this.irParaAddMusicas}/>
      case  "biblioteca":
        return <MinhaBiblioteca 
        irParaInicio={this.irParaInicio} irParaCriar={this.irParaCriar} irParaExcluir={this.irParaExcluir} irParaAddMusicas={this.irParaAddMusicas}/>
      case "add-musicas":
        return <AddMusica 
        irParaInicio={this.irParaInicio} irParaCriar={this.irParaCriar} irParaExcluir={this.irParaExcluir} irParaBiblioteca={this.irParaBiblioteca}/>  
      default:
        return <h1>Ocorreu algum erro inesperado :c</h1>
    }
  }
  irParaExcluir = () => {
    this.setState({telaAtual:"excluir"})
  }
  irParaCriar = () => {
    this.setState({telaAtual:"criar"})
  }
  irParaBiblioteca = () => {
    this.setState({telaAtual:"biblioteca"})
  }
  irParaInicio = () => {
    this.setState({telaAtual:"inicio"})
  }
  irParaAddMusicas = () => {
    this.setState({telaAtual:"add-musicas"})
  }
  render(){
    return(
      <div>
       {this.trocarDeTela()}
      </div>
    )
  }
}

