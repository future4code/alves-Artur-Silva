import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
`

export default class TelaDeDetalhes extends React.Component{
  
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarUsuarios()
  }
  
  pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url,{
      headers: {
        Authorization:"artur-soares-alves"
      }
    })
    .then((resposta) =>{
      this.setState({usuarios:resposta.data})
    })
    .catch((erro) =>{
      alert("Ocorreu um problema,tente novamente")
    })
  }

  render(){
    const listaUsuarios = this.state.usuarios.map((user)=>{
      return <CardUsuario>{user.name}</CardUsuario>
    })
    return(
      <div>
        <button onClick={this.props.irParaInicio}>Trocar de Tela</button>
        <h2>Lista de Usuário</h2>
        {listaUsuarios}
      </div>
    )
  }
}