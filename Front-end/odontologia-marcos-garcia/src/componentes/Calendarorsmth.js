import React from "react";
import FullCalendar from "@fullcalendar/react";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import { Calendar } from "@fullcalendar/core";

const CalendarioDoctorSemana = () => {

    const eventos = [
        {
            id: "1",
            title:'Juan Pepe Garcia',
            start: '2026-07-03T10:00:00Z', 
            end: '2026-07-03T11:00:00Z',
            description: 'esto funciona?',
            editable: false,
            extendedProps : {
                nombre : "Juan Pepe Garcia",
                sexo : "masculino",
                nacimiento: "1999-09-01T10:00:00Z",
                description : "reemplazo de pene",
                direccion : "la casa en la colina",
                telefono : "0424-7505998",
                descripcion : "I do not understand humans who are motivated by love. a person is born, lives for a number of years, and interacts with up to eight billion people. What proof is there of something they can't even define?"
            }
            /*          
            LO QUE TIENEN QUE TENER LAS CITAS PA EL BACKEND
            -data del paciente:
            --nombre del paciente
            --genero/sexo
            --nacimiento
            --direccion
            --telefono

            -data del usuario?:
            --nombre?
            --email??

            -doctor asignado
            -fecha del inicio de la cita
            -tiempo de la cita
            -descripcion
            -estatus 
            */

        }
    ]

        return (
        <div>
            <FullCalendar
            plugins={[DayGridPlugin,TimeGridPlugin,InteractionPlugin]}
            initialView={"timeGridWeek"}
            slotMinTime={'8:00:00'}
            slotMaxTime={'19:00:00'}
            weekends= {false}
            timeZone={"UTC"}
            headerToolbar={{
                start: "",
                center: "title",
                end: "",
            }}
            eventDisplay={"list-item"}
            events={eventos}
            eventClick={}
            />
        </div>
    )
}


//CalendarioSemana.render()
export default CalendarioDoctorSemana