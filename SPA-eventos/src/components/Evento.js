import React from 'react';

const Evento = ({ evento, eliminarEvento }) => (

    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{evento.mascota}</h3>
            <p className="card-text">
            <span>Nombre del dueño:</span> {evento.propietario}</p>
           <p><span>Fecha:</span> {evento.fecha}</p>
          <p><span>Hora:</span> {evento.hora}</p>

          <button className="btn btn-danger"
          onClick = { ()=> eliminarEvento(evento.id) }
          >
            Borrar &times;
          </button>
        </div>

    </div>
)

export default Evento;