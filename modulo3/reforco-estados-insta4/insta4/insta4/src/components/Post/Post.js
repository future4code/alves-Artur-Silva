import React, { useState } from "react";
import styled from "styled-components";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import iconeNaoSalvo from "../../img/2x/salvar.png"
import iconeSalvo from "../../img/2x/salvo.png"
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

function Post(props) {
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [salvo, setSalvo] = useState(false)
  const [numeroSalvo, setNumeroSalvo] = useState(0)
  const onClickCurtida = () => {
    setCurtido(!curtido)
    if (curtido === false) {
      setNumeroCurtidas(numeroCurtidas +1)
    } else {
      setNumeroCurtidas(numeroCurtidas -1)
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando);
  };

  const aoEnviarComentario = () => {
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
  };

  let iconeCurtida;

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto;
  } else {
    iconeCurtida = iconeCoracaoBranco;
  }

  let componenteComentario;

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />;
  }
  let iconeSalvar;
  
  if (salvo) {
    iconeSalvar = iconeSalvo
  } else {
    iconeSalvar = iconeNaoSalvo
  }
  const onClickSalvando = () => {
    if(salvo) {
      setSalvo(false)
    } else {
      setSalvo(true)
      alert("Você salvou o post")
    }
  }

 


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}//ícone do botão curtida
          onClickIcone={onClickCurtida}//quando clicar no botão curtida
          valorContador={numeroCurtidas}//o número de pessoas que curtiram o post
        />

        <IconeComContador
          icone={iconeSalvar}//ícone do botão comentario
          onClickIcone={onClickSalvando}//abre ao clicar no botao comentario
        />

        <IconeComContador
          icone={iconeComentario}//ícone do botão comentario
          onClickIcone={onClickComentario}//abre ao clicar no botao comentario
          valorContador={numeroComentarios}//numero de comentarios do post
        />

        
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  );
}

export default Post;
