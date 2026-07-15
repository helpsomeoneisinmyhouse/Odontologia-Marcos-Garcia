import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import EventModal from "./EventModal";


const CalendarioDoctorSemana = (rol) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lista, setLista] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [Citado, setCitado] = useState(null);
  const [specific, setSpecific] = useState(JSON.stringify(rol.rol));
  const [trigger, setTrigger] = useState(1);


  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setCitado(null); 
  }
  const shootTrigger = () => {
    setTrigger(prev => prev + 1)
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
        let fechaPrueba2 = new Date(cita.date_cita)
        let fechaPrueba = new Date(cita.date_cita)
        let status = cita.status_cita
        const hoy = new Date()
        

        fechaPrueba2.setHours(fechaPrueba.getHours() - 4)
        fechaPrueba.setHours(fechaPrueba.getHours() + cita.time_cita - 4)


        if (hoy > fechaPrueba2) {
          status = "COMPLETADA"
        }

        let fechaInicio = fechaPrueba2.toISOString()
        let fechaFinal = fechaPrueba.toISOString()

        return {
          id: cita.id_citas,
          title: cita.name_paciente, 
          start: fechaInicio, 
          end: fechaFinal,
          description: cita.desc_cita,
          editable: RolSelector(),
          extendedProps : {
              sexo : cita.genre_paciente,
              nacimiento: cita.birth_paciente,
              direccion : cita.dir_paciente,
              telefono : cita.telf_paciente,
              estatus: status,
              start: fechaInicio, 
              end: fechaFinal,
              id: cita.id_citas
            }
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
    if (trigger === 0) return
    const load = async () => {
      const data = await fetchCitasCompletas();
      if (data) {
        setLista([data].flat());
        setIsLoading(false)
      }
    };
    
    setTrigger(prev => prev - 1)
    load();
  }, [trigger]);

    if (isLoading) {
    return <div>cargando...</div>;}


 return (
    <div>
      <EventModal
        isOpen={isOpen} 
        onClose={closeModal} 
        fetchCitas={fetchCitasCompletas}
        info={Citado}
        trigger={shootTrigger} 
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
        eventDrop= { async function(info) {
            const id = info.event.id
            const API = 'http://127.0.0.1:8080/api/citaCompletaDate'
            const newStart = info.event.start.toISOString();
            //const newEnd = info.event.end ? info.event.end.toISOString() : newStart;
            
            fetch(`${API}/${id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                date_cita : newStart
              })
            }).then(response => {
              if (!response.ok) {
                console.error('Failed to update event in database.');
                info.revert();
              }
            });
            shootTrigger()
        }}
      />
    </div>
  )
}



//CalendarioSemana.render()
export default CalendarioDoctorSemana