import React from 'react';

const Formulario = ({handleSubmit, handleChange, values}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Nombre
                </label>
                <div className="col-sm-8 col-lg-10">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Nombre "
                        name="nombre"
                        onChange={handleChange}
                        value={values.nombre}/>
                </div>
            </div>

            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Apellido
                </label>
                <div className="col-sm-8 col-lg-10">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Apellido "
                        name="apellido"
                        onChange={handleChange}
                        value={values.apellido}/>
                </div>
            </div>
            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Fecha
                </label>
                <div className="col-sm-8 col-lg-4">
                    <input 
                        type="date" 
                        className="form-control"
                        name="fecha"
                        onChange={handleChange}
                        value={values.fecha}/>
                </div>

                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Hora
                </label>
                <div className="col-sm-8 col-lg-4">
                    <input 
                        type="time" 
                        className="form-control"
                        name="hora"
                        onChange={handleChange}
                        value={values.hora}/>
                </div>
            </div>
            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Tipo de evento
                </label>
                <div className="col-sm-8 col-lg-10">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Tipo de evento "
                        name="tipoEvento"
                        onChange={handleChange}
                        value={values.tipoEvento}/>
                </div>
            </div>
            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    ID del evento
                </label>
                <div className="col-sm-8 col-lg-10">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="id de evento "
                        name="idEvento"
                        onChange={handleChange}
                        value={values.idEvento}/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-12 text-right">
                    <input type="submit" value="Agregar nueva cita" className="py-2 mt-2 btn btn-success"/>
                </div>
            </div>
        </form>
    );
}

export default Formulario;
