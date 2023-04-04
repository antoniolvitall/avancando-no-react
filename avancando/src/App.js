import {useState} from 'react';
import './App.css';

import Antonio from "./assets/antonio.jpg";
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';


function App() {
const [userName] = useState("Marcela");
const cars = [
  {id:1, brand:"Ferrari", color: "Vermelha", newCar: true, km: 0},
  {id:1, brand:"Jaguar", color: "Preto", newCar: false, km: 20000},
  {id:1, brand:"Jeep", color: "Verde", newCar: false, km: 30000},
]

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
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* fragments */}
      <Fragments propFragment="teste" />
      {/* children */}
      <Container myValue="testing" >
        <p>Este e o conteudo</p>
      </Container>
      <Container myValue="testing 2" >
        <h5>Testando container</h5>
      </Container>
    </div>
  );
};

export default App;
