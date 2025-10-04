import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario';
import { useState } from 'react';
import Time from './Componentes/Time';

function App() {

  const times = [
    {
      nome: "Programação",
      corPrimaria: " #57c278 ",
      corSecundaria: " #d9f7e9"
    },
      {
      nome:"Front-End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff"
    },
      {
      nome: "Back-End",
      corPrimaria:"#a6d157" ,
      corSecundaria:"#f0f8e2"
    },
      {
      nome: "Banco De Dados",
      corPrimaria: "e06869",
      corSecundaria: "#fde7e8"
    },
      {
      nome: "Mobile",
      corPrimaria: "#db8ebf",
      corSecundaria: "#fae9f5"
    },
      {
      nome: "Inovação e Gestão",
      corPrimaria:"#ffba29" ,
      corSecundaria:"#ffeedf" 
    }
  ]
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador); 
    setColaboradores([...colaboradores, colaborador]);

  };
  return (
    <div className="App">
     
      <Banner/>
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores= {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
