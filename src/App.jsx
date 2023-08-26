import './App.css'
import {Header} from './components/Header';
import {Condicion} from './components/Condicion';
import { ListDogs } from './components/ListDogs';
import { Counter } from './components/Counter';

function App() {

const dataListDogs = [
  {
    id: "1",
    name: "Simba",
    breed: "Retriever",
    age: 3,
    owner: "Stuart",
    image:
      "https://www.hogarmania.com/archivos/201901/tipos-de-retriever-668x400x80xX.jpg",
    vaccines: true,
  },
  {
    id: "2",
    name: "Luna",
    breed: "Corgi",
    age: 2,
    owner: "Sheldon",
    image:
      "https://www.hogarmania.com/archivos/201809/corgi-gales-pembroke-668x400x80xX.jpg",
    vaccines: false,
  },
  {
    id: "3",
    name: "Coco",
    breed: "Shar Pei",
    age: 1,
    image:
      "https://www.hogarmania.com/archivos/201502/mascotas-shar-pei-1-668x400x80xX.jpg",
    owner: "Penny",
    vaccines: true,
  },
];

  return (
      <div>
        <h1>Clase React</h1>
        <Header titulo={"Clase De Hook"} description="Creando un Contador"/>
        <Counter/>
        <hr />
        <Condicion valor={true}/>
        <ListDogs listDogs={dataListDogs}/>
      </div>
  )
}

export default App
