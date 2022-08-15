import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post
        nomeUsuario={"paulinho"}
        fotoUsuario={"https://picsum.photos/50/50?blur"}
        fotoPost={"https://picsum.photos/200/150?blur"}
      />
      <Post
        nomeUsuario={"pedrinho"}
        fotoUsuario={"https://picsum.photos/50/50?blur=2"}
        fotoPost={"https://picsum.photos/200/150?blur=2"}
      />
    </MainContainer>
  );
}

export default App;
