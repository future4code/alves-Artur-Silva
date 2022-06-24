import React from "react";
import styled from "styled-components";
import axios from "axios"

const CardInicio = styled.div`
       border: 1px black solid;
    display:flex;
    justify-content:space-around;
    height:10vh;
`

const CardPlaylist = styled.div`
    border:1px black solid;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`


export default class MinhaBiblioteca extends React.Component{

    state = {
        playlists: []
    }

    componentDidMount(){
        this.pegarPlaylists()
    }


pegarPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, {
        headers: {
            Authorization: "artur-soares-alves"
        }
    })
    .then((resposta) => {
        this.setState({playlists: resposta.data})
    })
    .catch((erro) => {
        alert(erro.response.data.message)
    })
}

render(){
    //   const listaPlaylists = this.state.playlists.map((playlist) => { 
    //   })
      
        return(
            <div>
                <h1>Biblioteca</h1>
                <CardInicio>
                <button onClick={this.props.irParaInicio}>Inicio</button>
                <button onClick={this.props.irParaCriar}>Criar Playlist</button>
                <button onClick={this.props.irParaExcluir}>Excluir Musicas/Playlist</button>
                <button onClick={this.props.irParaAddMusicas}>Adicionar Musicas</button>
                </CardInicio>
            </div>
        )
    }
}
