import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import EuImagem from './eu.jpg';
import EmailImage from './email.png';
import LocalImage from './local.png';
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={EuImagem} 
          nome="Artur" 
          descricao="Oi, eu sou o Artur. Sou aluno da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
        imagem={EmailImage}
        nome="Email:"
        descricao="artursoaares@hotmail.com"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
        imagem={LocalImage}
        nome="Endereço:"
        descricao="Rua Ferdinand Otto Muller, 575"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://media.glassdoor.com/sqll/2493899/probat-leogap-squarelogo-1555306481700.png" 
          nome="Probat Leogap" 
          descricao="Menor aprendiz mecânico." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href="https://Facebook.com" target='_blank'><ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />   </a>     

        <a href="https://Twitter.com" target='_blank'><ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        </a>
      </div>
    </div>
  );
}

export default App;
