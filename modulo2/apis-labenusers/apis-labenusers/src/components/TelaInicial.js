import React, { Component } from 'react'
import axios from 'axios'

const body = {
    name : "User1",
    email : "user1@email.com"
}
const newUser = () => {
    const user = axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
    body,
    {
        headers:{
            Authorization: "artur-soares-alves"
    }
}
)
user.then((resposta) =>{
    console.log(resposta)
})
user.catch((erro) => {
    console.log(erro.response.data.message)
})
}

export default class TelaInicial extends Component {
  render() {
    return (
      <div>
        <h1>Tela inicial:</h1>
        <button>Trocar de tela</button><br/>
        <input placeholder='Nome'/>
        <input placeholder='Email'/>
        <button onClick={newUser()}>Criar Usuário</button>
      </div>
    )
  }
}
