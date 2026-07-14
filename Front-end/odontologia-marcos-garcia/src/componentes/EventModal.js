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

    return (
        <div>
            <div
                id="myModal"
                className="modal"
                style={{ display: isOpen ? "block" : "none" }}
                onClick={handleOutsideClick}>
                <div className="modal-content">
                    <button className="close" onClick={onClose}>&times;</button>
                    
                    <h2 className="title">{info?.title}</h2>

                    <div className="inliner">

                        <div className="inline start">
                            <p className="desc"><strong>Descripción:</strong> {info?.extendedProps?.description}</p>
                        </div>

                        <div className="inline end">
                            <strong>Hora inicio</strong>
                            <p>{info?.extendedProps?.start}</p>
                            <strong>Sexo del paciente</strong>
                            <p>{info?.extendedProps.sexo}</p>
                            <strong>Hora final</strong>
                            <p>{info?.extendedProps?.end}</p>
                            <strong>Fecha de Nacimiento</strong>
                            <p>{info?.extendedProps.nacimiento}</p>
                            <p><strong>Teléfono:</strong> {info?.extendedProps?.telefono}</p>
                            <p><strong>Dirección:</strong> {info?.extendedProps?.direccion}</p>
                            <div className="inline end">
                            <p><strong>status de la cita:</strong> {info?.extendedProps?.estatus}</p>
                            <p>confirmar la cita?</p>
                            <div className="scrBtns">
                                    <button onClick={(e) => {cancelarCita(e)}} className="scrBtn cancel"> X </button>
                                    <button onClick={(e) => {confirmarCita(e)}} className="scrBtn confirm"> V </button>
                            </div>
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