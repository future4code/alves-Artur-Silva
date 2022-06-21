import logo from './logo.svg';
import './App.css';
import TelaInicial from './components/TelaInicial';
import TelaDeDetalhes from './components/TelaDeDetalhes';

function App() {
  return (
    <div className="App">
      <TelaInicial/>
      {/* SEGUNDA TELA */}
      <TelaDeDetalhes/>
    </div>
  );
}

export default App;
