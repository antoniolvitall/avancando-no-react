import { useState } from 'react';
import './App.css';
import Antonio from "./assets/antonio.jpg";
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
const name = "Gael";
const [userName] = useState("Marcela");

  return (
    <div className="App">
      <h1>testando insercao de imagens no react</h1>
      {/* imagem em public */}
      <div>
        <img src="/5crzya58wzp21.jpg" alt="imagem aleatoria" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={Antonio} alt="Eu" />
      </div>
      <ManageData/>
      <ListRender/>
      <CondicionalRender/>
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand="Renault" km={117000} color="Preto" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Chevrolet" color="vermelho" km={120000} newCar={false} />
      <CarDetails brand="Honda" color="branco" km={0} newCar={true} />
    </div>
  );
}

export default App;
