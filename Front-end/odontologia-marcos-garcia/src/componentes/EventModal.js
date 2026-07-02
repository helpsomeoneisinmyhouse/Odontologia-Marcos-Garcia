import React from "react";
import '../styles/modal.css';

const EventModal = ({ isOpen, onClose, info }) => {
    
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
                    <span className="close" onClick={onClose}>&times;</span>
                    
                    {/* Renderizamos la información del evento dinámicamente */}
                    <h2>{info?.title}</h2>
                    <p><strong>Paciente:</strong> {info?.extendedProps?.nombre}</p>
                    <p><strong>Teléfono:</strong> {info?.extendedProps?.telefono}</p>
                    <p><strong>Dirección:</strong> {info?.extendedProps?.direccion}</p>
                    <p><strong>Descripción:</strong> {info?.extendedProps?.descripcion}</p>
                </div>
            </div>
        </div>
    );
};

export default EventModal;