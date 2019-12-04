import React, {useState, useEffect} from 'react';
import './bootstrap.min.css'

import Header from './components/Header'
import NuevoEvento from './components/Nuevoevento';
import ListaEventos from './components/ListaEventos';


const App = () => {

  const [eventos, setEventos] = useState([]);
  
  // Cuando la aplicacion se carga
  useEffect(() => {
    const eventosLS = localStorage.getItem('eventos');
    if(eventosLS){
      setEventos(JSON.parse(eventosLS));
    }
  }, [])
  
  //Cuando eliminamos o agregamos un evento
  useEffect(() => {
    localStorage.setItem('eventos', JSON.stringify(eventos))
  })


  const crearNuevoEvento = (datos) => {
    //copiar el state actual
    const copiaEventos = [...eventos, datos]

    // agregar el nuevo state
    setEventos(copiaEventos);
  }

  // elimina los eventos del state
  const eliminarEvento = (id) => {
    // tomar una copia del state
    const eventosActuales = [...eventos]
    const copiaEventos = eventosActuales.filter(evento =>  evento.id !== id)  
     
    setEventos(copiaEventos);
  }

  return (
    <div className="container">
      <Header 
        titulo="SPA De Eventos"
      />
      <div className="row">
					<div className="col-7 mx-auto">
						<NuevoEvento 
							crearNuevoEvento={crearNuevoEvento}
						/>
					</div>
					<div className="mt-5 col-5 mx-auto">
						<ListaEventos 
							eventos ={eventos}
							eliminarEvento = {eliminarEvento}
						/>
					</div>
      </div>
    </div>
  );
}

export default App;
