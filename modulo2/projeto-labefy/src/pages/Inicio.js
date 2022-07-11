import React from "react";
import styled from "styled-components";

const CardInicio = styled.div`
       border: 1px black solid;
    display:flex;
    justify-content:space-around;
    height:10vh;

`
const Body = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Subtitulo = styled.div`
    display:flex;
    width:20vw;
    height:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Titulo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:60vw;
`
// const  = styled.div`
//     display:flex;
//     flex-direction:column;
//     align-items:center;
// `


export default class Inicio extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>Inicio</h1> */}
                <CardInicio>
                <button onClick={this.props.irParaBiblioteca}>Minha biblioteca</button>
                <button onClick={this.props.irParaCriar}>Criar Playlist</button>
                <button onClick={this.props.irParaExcluir}>Excluir Musicas/Playlist</button>
                <button onClick={this.props.irParaAddMusicas}>Adicionar Musicas</button>
                </CardInicio>
                <Body>
                    <Subtitulo>
                        
                            <h3>Subtitulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, distinctio.</p>
                        
                    </Subtitulo>
                    <Titulo>
                        
                            <h2>Titulo Principal</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis dolorem et ipsum nisi sunt ipsam, inventore vero molestias labore aperiam voluptates. Exercitationem aliquam atque nisi commodi neque dolores corrupti.</p>
                        
                    </Titulo>     
                    <Subtitulo>
                        
                            <h3>Subtitulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, distinctio.</p>
                        
                    </Subtitulo>
                </Body>
            </div>
        )
    }
}