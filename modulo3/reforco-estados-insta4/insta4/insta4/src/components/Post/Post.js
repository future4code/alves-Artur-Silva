import React, { useState } from "react";
import styled from "styled-components";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

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
  const [numeroCurtidas, setNumeroCurtidas] = useState(2);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(1);

  const onClickCurtida = () => {
    console.log("Curtiu!");
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
