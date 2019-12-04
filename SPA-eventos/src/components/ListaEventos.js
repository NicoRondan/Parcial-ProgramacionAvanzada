import React from 'react';
import Evento from './Evento'

const ListaEventos = ({eventos, eliminarEvento}) => {

    // Imprimir un mensaje en base a si hay eventos o no
    const mensaje = Object.keys(eventos).length === 0 ? 'No hay eventos' : 'Administra los eventos aqui';
    
    return (
        <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">{mensaje}</h2>

            <div className="listas-eventos">
                {eventos.map(evento => (
                    <Evento 
                        key={evento.id}
                        evento={evento}
                        eliminarEvento = {eliminarEvento}
                    />
                ))}
            </div>
        </div>
    </div>
    )
};


export default ListaEventos;