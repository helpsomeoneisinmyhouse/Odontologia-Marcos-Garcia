import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import EventModal from "./EventModal";


const CalendarioDoctorSemana = (rol) => {
  const [lista, setLista] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [Citado, setCitado] = useState(null);
  const [specific, setSpecific] = useState(JSON.stringify(rol.rol));
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setCitado(null); 
  }
  const confirmarCita = () => {
    alert('se confirmo!')
  }
  const cancelarCita = () => {
    alert('se cancelo!')
  }
  const RolSelector = () => {
    switch (specific) {
      case '{"rol":"doctor"}': return false;
      case '{"rol":"secreto"}': return true;
      default: 
        return false;
    }
  };
 
 async function fetchCitasCompletas() {
   const API = 'http://127.0.0.1:8080/api/citaCompleta' 
   try {
     const response = await fetch(API);
     const citas = await response.json();
     const returning = citas.map(cita => {        
        let fechaPrueba = new Date(cita.date_cita)
        fechaPrueba.setHours(fechaPrueba.getHours() + cita.time_cita)
        let fechaFinal = fechaPrueba.toISOString()

        return {
          id: cita.id_citas,
          title: cita.name_paciente, 
          start: cita.date_cita, 
          end: fechaFinal,
          description: cita.desc_cita,
          editable: RolSelector(),
          extendedProps : {
              sexo : cita.genre_paciente,
              nacimiento: cita.birth_paciente,
              direccion : cita.dir_paciente,
              telefono : cita.telf_paciente,
              estatus:cita.status_cita}
          }
      });

    return returning
    } catch (error) {
      console.error('ERROR!:'+ error)
    }
 
  }           
  function openCita(info) {
    setCitado(info.event);
    openModal();
  }
  

  useEffect(() => {
    const load = async () => {
      const data = await fetchCitasCompletas();
      if (data) {
        setLista([data].flat());
        //console.log('PEPE')
       // console.log(data)
        console.log('esta es la data que se deberia mostrar pero no aparece')
        //console.log(lista)
      }
    };
 
    load();
  }, []);

  /*
  console.log('creo')
  console.log(eventosCreo)
  console.log('creo')
  */

 return (
    <div>
      <EventModal
        isOpen={isOpen} 
        onClose={closeModal} 
        cancel={cancelarCita}
        confirm={confirmarCita}
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
        events={lista}
        eventClick={openCita}
        eventDrop= {function(info) {
            //const newStart = info.event.start.toISOString();
            // For all-day events, `end` might be null. Use start date if end is missing.
            //const newEnd = info.event.end ? info.event.end.toISOString() : newStart;
            //info.event.start = newStart
            //info.event.end = newEnd
            /*

            CODIGO ESTRUCTURAL PA EL BACKEND?????

            fetch('/update-event-api', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: info.event.id,
                start: newStart,
                end: newEnd
              })
            }).then(response => {
              if (!response.ok) {
                console.error('Failed to update event in database.');
                info.revert();
              }
            });
            */
        }}
      />
      {console.log(lista)}
    </div>
  )
}



//CalendarioSemana.render()
export default CalendarioDoctorSemana