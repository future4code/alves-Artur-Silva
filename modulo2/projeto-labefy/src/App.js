import React from "react"
import Registro from "./pages/Registro"
import Login from "./pages/Login"
import Labefy from "./pages/Labefy"
import Inicio from "./pages/Inicio"

export default class App extends React.Component {

  state = {
    telaAtual: "inicio"
  }

  trocarDeTela = () => {
    switch(this.state.telaAtual){
      case "inicio":
        return <Inicio/>
      case "login":
      return <Login/>
      case "registro":
      return <Registro/>
      case  "labefy":
        return <Labefy/>
      default:
        return <h1>Ocorreu algum erro inesperado :c</h1>
    }
  }
  irParaLogin = () => {
    this.setState({telaAtual:"login"})
  }
  irParaRegistro = () => {
    this.setState({telaAtual:"registro"})
  }
  irParaLabefy = () => {
    this.setState({telaAtual:"labefy"})
  }
  render(){
    return(
      <div>
       <Inicio/>
      </div>
    )
  }
}

