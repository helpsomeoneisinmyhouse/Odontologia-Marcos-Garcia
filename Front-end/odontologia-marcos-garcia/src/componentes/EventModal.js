import React from "react";
import '../styles/modal.css';

const EventModal = ({ isOpen, onClose, cancel, confirm, info }) => {
    
    const handleOutsideClick = (event) => {
        if (event.target.id === "myModal") {
            onClose(); 
        }
    };

    if (!info && isOpen) {
       return null; 
    }

    return (
        <div>
            <div
                id="myModal"
                className="modal"
                style={{ display: isOpen ? "block" : "none" }}
                onClick={handleOutsideClick}
            >
                <div className="modal-content">
                    <button className="close" onClick={onClose}>&times;</button>
                    
                    {/* Renderizamos la información del evento dinámicamente */}
                    <h2>{info?.title}</h2>
                    <p><strong>Paciente:</strong> {info?.extendedProps?.nombre}</p>
                    <p><strong>Teléfono:</strong> {info?.extendedProps?.telefono}</p>
                    <p><strong>Dirección:</strong> {info?.extendedProps?.direccion}</p>
                    <p><strong>Descripción:</strong> {info?.extendedProps?.descripcion}</p>
                    <br/>

                    <div className="scrBtns">
                            <button onClick={cancel} className="scrBtn cancel">cancelar cita</button>
                            <button onClick={confirm} className="scrBtn confirm">confirmar cita</button>
                    </div>
                   


                </div>
            </div>
        </div>
    );
};

export default EventModal;