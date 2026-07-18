import React from "react";
import '../styles/modal.css';

const EventModal = ({ isOpen, onClose, fetchCitas, info, trigger }) => {
    
    const handleOutsideClick = (event) => {
        if (event.target.id === "myModal") {
            onClose(); 
        }
    };

    if (!info && isOpen) {
       return null; 
    }






    async function confirmarCita(e) {
        e.preventDefault()
        const id = info?.extendedProps?.id
        const API = 'http://127.0.0.1:8080/api/citaCompletaStatus'

            try {
                await fetch(`${API}/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    status_cita : "CONFIRMADA"
                })
                });
            fetchCitas(e);
            trigger()
            onClose()
            } catch (error) {
                console.error('Error updating movie:', error);
            }
    }

    async function cancelarCita(e) {
        e.preventDefault()
        const id = info?.extendedProps?.id
        const API = 'http://127.0.0.1:8080/api/citaCompletaStatus'

            try {
                await fetch(`${API}/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    status_cita : "CANCELADA"
                })
                });
            fetchCitas(e);
            trigger()
            onClose()
            } catch (error) {
                console.error('Error updating movie:', error);
            }
    }

    async function logicCita(e) {
        e.preventDefault()

        if (window.confirm("estas seguro?") == false) {
            return
        } 


        const id = info?.extendedProps?.id
        const API = 'http://127.0.0.1:8080/api/citaCompletaLogic'

            try {
                await fetch(`${API}/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    logic_cita : 'I'
                })
                });
            fetchCitas(e);
            trigger()
            onClose()
            } catch (error) {
                console.error('Error updating movie:', error);
            }
    }

        let color = '#868686'
        switch (info?.extendedProps?.estatus) {
          case "CONFIRMADA":
            color = '#69a017'
            break;
          case "CANCELADA":
            color = '#8A2BE2'
            break;
          case "PENDIENTE":
            color = '#868686'
            break;
          case "COMPLETADA":
            color = '#525a46'
            break;
          default:
            break;
        }

        let logic = "none"
        if (info?.extendedProps?.estatus === "COMPLETADA"){
            logic = "block" 
        }
        let ilogical = "block"
        if (info?.extendedProps?.estatus === "COMPLETADA"){
            ilogical = "none" 
        }

        console.log(info)

    function starter() {   
        let start = info?.extendedProps?.start
        start = start.replace(":00.000Z","")
        return start
    }

    return (
        <div>
            <div
                id="myModal"
                className="modal"
                style={{ display: isOpen ? "block" : "none"}}
                onClick={handleOutsideClick}>
                <div className="modal-content" style={{borderColor: color}}>
                    <button className="close" onClick={onClose}>&times;</button>
                    
                    <h2 className="title" style={{backgroundColor: color}}>{info?.title}</h2>

                    <div className="inliner center">

                        <div className="inline start">
                            <strong>Descripción:</strong> 
                            <p className="desc">{info?.extendedProps?.description}</p>

                            <div className="inline date">
                                
                                <strong className="horaInicio">Hora inicio</strong><strong className="horaFinal">Hora final</strong>

                                <div className="eventDates">
                                    <p className="eventDate">{info?.extendedProps?.start.replace(":00.000Z","").replace("T",", Hora: ")}</p><p className="eventDate"> {info?.extendedProps?.end.replace(":00.000Z","").replace("T",", Hora: ")}</p>  
                                </div>
                                
                            </div>
                        </div>

                        <div className="inline end">
                            <strong>Sexo del paciente</strong>
                            <p>{info?.extendedProps.sexo}</p>
                            <strong>Fecha de Nacimiento</strong>
                            <p>{info?.extendedProps.nacimiento.replace(":00.000Z","").replace("T",", Hora: ")}</p>
                            <p><strong>Teléfono:</strong> {info?.extendedProps?.telefono}</p>
                            <p><strong>Dirección:</strong> {info?.extendedProps?.direccion}</p>

                            <div className="inline status" style={{ backgroundColor: color, display: ilogical}}>
                                <p><strong>status de la cita:</strong> {info?.extendedProps?.estatus}</p>
                                <p>confirmar la cita?</p>
                                <div className="scrBtns">
                                        <button onClick={(e) => {cancelarCita(e)}} className="scrBtn cancel"> cancelar </button>
                                        <button onClick={(e) => {confirmarCita(e)}} className="scrBtn confirm"> confirmar </button>
                                </div>
                            </div>
                            
                            <div className="inline logic" style={{display: logic}}>
                                
                                <strong>Ocultar cita?</strong>
                                <p>esta cita ya paso, le gustaria quitarla de la agenda?</p>
                                <button onClick={(e) => {logicCita(e)}} className="logicBtn">Ocultar cita</button>
                                
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default EventModal;