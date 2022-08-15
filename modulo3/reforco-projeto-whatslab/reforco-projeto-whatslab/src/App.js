import React, {useState} from 'react';
import styled from 'styled-components';

  //Estilizção
  const Box = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  `
  const Historico = styled.section`
  border:black 5px solid;
  width:50vw;
  background-color:grey;
  `
  const Inputs = styled.div`
  display:flex;
  `
  const InputPessoa = styled.input`
    width:10vw;
  `
  const InputMensagem = styled.input`
    width:30vw;
  `
  const ButtonEnviar = styled.button`
    width:10vw;
    color:red;
    background-color:white;
    &:hover{
      background-color:red;
      color:white;
    }
  `
function App() {

  //Estados
  const [pessoa, setPessoa] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [historico, setHistorico] = useState([])



  //Funções
  const onChangePessoa = (e) => {
    setPessoa(e.target.value)
    console.log(pessoa)
  }

  const onChangeMensagem = (e) => {
    setMensagem(e.target.value)
    console.log(mensagem)
  }

  const onClickEnviar = () => {
    const chat = {
      pessoa,
      mensagem
    }
      const novoHistorico = [...historico, chat ]
      
      setHistorico(novoHistorico)
      setPessoa('')
      setMensagem('')
    }
    
  
  
  
  const chatLista = historico.map((item) => {
    return <p key={item.pessoa}><strong>{item.pessoa}:</strong>{item.mensagem}</p>
  })

  //Utilizar o spread operator para renderizar a lista 'historico'

  return (
    <div>
      <Box>
        <Historico>
          {chatLista}
        </Historico>

        <Inputs>
        <InputPessoa type="text" placeholder='Nome'
               value={pessoa}
               onChange={onChangePessoa}/>
     
        <InputMensagem type="text" placeholder='Mensagem'
               value={mensagem}
               onChange={onChangeMensagem}
        />
        <ButtonEnviar onClick={onClickEnviar}>Enviar!</ButtonEnviar>
        </Inputs>
      </Box>
    </div>
  );
}

export default App;
