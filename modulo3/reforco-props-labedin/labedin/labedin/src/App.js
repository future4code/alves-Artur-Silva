import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Eu from './img/eu.jpg'
import Eb from './img/eb.png'
import Leogap from './img/download.jfif'
import CardPequeno from './components/CardPequeno/CardPequeno';
import Email from './img/email.png'
import Endereco from './img/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Eu} 
          nome="Artur Soares" 
          descricao="Oi, meu nome é Artur Soares, gosto de ouvir música e jogar com meus amigos, gosto muito de viajar e conhecer lugares novos, pretendo viajar o mundo inteiro futuramente :D"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    <div className='page-section-container'>
      <CardPequeno
        imagem={Email}
        nome="Email"
        descricao="email@email.email.email"
      />  
    </div>

    <div className='page-section-container'>
      <CardPequeno
        imagem={Endereco}
        nome="Endereço"
        descricao="Rua Avenida Brasil Curitiba Pr, 5000"
      />  
    </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Eb} 
          nome="EXÉRCITO BRASILEIRO" 
          descricao="Assistente da SS2 da SSIP/5 | Infantaria." 
        />
        
        <CardGrande 
          imagem={Leogap} 
          nome="PROBAT LEOGAP" 
          descricao="Menos aprendiz mecânico, montagem e manutenção de probatinos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
