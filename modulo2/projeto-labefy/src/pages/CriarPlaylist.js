import React from "react";
import styled from "styled-components";
import axios from "axios";

const CardInicio = styled.div`
       border: 1px black solid;
    display:flex;
    justify-content:space-around;
    height:10vh;

`

export default class CriarPlaylist extends React.Component{

    state = {
        nomePlaylist: ""
    }
    
    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomePlaylist
        }
        axios.post(url, body, {
            headers: {
                Authorization: "artur-soares-alves"
            }
        })
        .then((resposta) => {
            alert("Playlist criada com sucesso!!!")
            this.setState({nomePlaylist: ""})
        })
        .catch((erro) => {
            alert(erro.response.data.message)
            this.setState({nomePlaylist: ""})
        })
    }

    handleNome = (event) => {
        this.setState({nomePlaylist:event.target.value})
    }

    render(){
        return(
            <div>
                <h1>Criar Playlist</h1>
                <CardInicio>
                <button onClick={this.props.irParaBiblioteca}>Minha biblioteca</button>
                <button onClick={this.props.irParaInicio}>Inicio</button>
                <button onClick={this.props.irParaExcluir}>Excluir Musicas/Playlist</button>
                <button onClick={this.props.irParaAddMusicas}>Adicionar Musicas</button>
                </CardInicio>
                <input placeholder="Nome da Playlist"
                    value={this.state.nomePlaylist}
                    onChange={this.handleNome}/>
                <button onClick={this.criarPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}