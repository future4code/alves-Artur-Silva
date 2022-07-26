import React from 'react'
import styled from 'styled-components'

const CardPequeno = (props) => {

    const Box = styled.div `
        display: flex;
        flex-direction:start;
        gap:20px ;
        align-items: center;
        justify-content: start;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 60px;
    `
    
     const Img = styled.img `
         width: 50px;
         margin-right: 10px;
         border-radius: 50%;
     `
    
    const Titulo = styled.h4 `
        margin-bottom: 15px;
        align-self:center;
    `
    
    const Container = styled.div `
        display: flex;
        gap: 20px;
        align-items:center;
    `


  return (
    <div>
         <Box>
        <Img src={ props.imagem }/>
            <Container>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </Container>
        </Box>
    </div>
  )
}

export default CardPequeno