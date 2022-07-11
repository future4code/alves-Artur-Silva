import React from "react";
import styled from "styled-components";

const CardInicio = styled.div`
       border: 1px black solid;
    display:flex;
    justify-content:space-around;
    height:10vh;

`

export default class AddMusica extends React.Component{
    render(){
        return(
            <div>
                <h1>Add Musicas!!</h1>
                <CardInicio>
                <button onClick={this.props.irParaBiblioteca}>Minha biblioteca</button>
                <button onClick={this.props.irParaCriar}>Criar Playlist</button>
                <button onClick={this.props.irParaInicio}>Inicio</button>
                <button onClick={this.props.irParaExcluir}>Excluir Playlists</button>
                </CardInicio>
            </div>
        )
    }
}