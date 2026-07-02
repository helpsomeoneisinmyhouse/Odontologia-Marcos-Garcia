import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import EventModal from "./EventModal";


const CalendarioDoctorSemana = (rol) => {
  const [isOpen, setIsOpen] = useState(false);
  const [Citado, setCitado] = useState(null);
  const [specific, setSpecific] = useState(JSON.stringify(rol.rol));

  const openModal = () => setIsOpen(true);
  
  const closeModal = () => {
    setIsOpen(false);
    setCitado(null); 
  }

  const RolSelector = () => {
    switch (specific) {
      case '{"rol":"doctor"}': return false;
      case '{"rol":"secreto"}': return true;
      default: 
        return false;
    }
  };

  const eventos = [
          {
              id: "1",
              title:'Juan Pepe Garcia',
              start: '2026-07-03T10:00:00Z', 
              end: '2026-07-03T11:00:00Z',
              description: 'esto funciona?',
              editable: RolSelector(),
              extendedProps : {
                  nombre : "Juan Pepe Garcia",
                  sexo : "masculino",
                  nacimiento: "1999-09-01T10:00:00Z",
                  description : "reemplazo de pene",
                  direccion : "la casa en la colina",
                  telefono : "0424-7505998",
                  descripcion : "I do not understand humans who are motivated by love. a person is born, lives for a number of years, and interacts with up to eight billion people. What proof is there of something they can't even define?"
              }}]
            
  function openCita(info) {
    setCitado(info.event);
    openModal();
  }

  console.log(RolSelector())

  return (
    <div>
      <EventModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        info={Citado} 
      />
      
      <FullCalendar
        plugins={[DayGridPlugin, TimeGridPlugin, InteractionPlugin]}
        initialView="timeGridWeek"
        slotMinTime="08:00:00"
        slotMaxTime="19:00:00"
        weekends={false}
        timeZone="UTC"
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        eventDisplay="list-item"
        editable={RolSelector()}
        events={eventos}
        eventClick={function(info) {
          openCita(info)
        }}
      />
    </div>
  )
}



//CalendarioSemana.render()
export default CalendarioDoctorSemana