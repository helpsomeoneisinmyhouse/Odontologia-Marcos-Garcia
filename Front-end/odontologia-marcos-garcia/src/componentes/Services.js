// Filename - pages/Services.js

import React from "react";
import placeholder1 from "../assets/placeholder 1.jpg"
import placeholder2 from "../assets/placeholder 2.jpg"
import placeholder3 from "../assets/placeholder 3.jpg"
import '../styles/services.css'


const Services = () => {
    return (
        <div>
            <h1>
                Nuestros servicios
            </h1>
            <div class="services">
                <div class="service">
                    <img src={placeholder1} alt='something' width="200px"/>
                    <h3>Limpieza Dental!</h3>
                    <p>Procedimiento que consiste en la remoción y eliminación de Cálculo Dental, Placa Bacteriana y Manchas de la Superficie Dental incluso las que se alojan por debajo de la encía. Es de suma importancia para mantener en buen estado los tejidos periodontales.</p>
                </div>
                <div class="service">
                    <img src={placeholder2} alt='something' width="200px"/>
                    <h3>Restauraciones en Resina!</h3>
                    <p>Permite devolver la Anatomía, Estructura y salud perdida por las caries o algún trauma que comprometa el esmalte o dentina.</p>
                </div>
                <div class="service"> 
                    <img src={placeholder3} alt='something' width="200px"/>
                    <h3>Cirugía Bucal!</h3>
                    <p>La Cirugía de Terceros Molares es una intervención simple, mínimamente invasiva y casi indolora que se lleva a cabo para extraer las muelas del juicio o también llamadas cordales.</p>
                </div>
                <div class="service"> 
                    <img src={placeholder1} alt='something' width="200px"/>
                    <h3>Ortodoncia Interceptiva!</h3>
                    <p>Consiste en el uso de aparatología en edad temprana para guiar o corregir el mal crecimiento dental y/o esqueletal.</p>
                </div>
                <div class="service"> 
                    <img src={placeholder2} alt='something' width="200px"/>
                    <h3>Ortodoncia Correctiva!</h3>
                    <p>Consiste en el uso de aparatos Fijos para la corrección de maloclusiones.</p>
                </div>
                <div class="service"> 
                    <img src={placeholder3} alt='something' width="200px"/>
                    <h3>Prótesis Dentales!</h3>
                    <p>Permite reemplazar las estructuras dentales perdidas para devolver la función Masticatoria, Fonética y Estética.</p>
                </div>
                <div class="service"> 
                    <img src={placeholder1} alt='something' width="200px"/>
                    <h3>Blanqueamiento Dental!</h3>
                    <p>Este Procedimiento permite a través del uso de medicamentos químicos, aclarar el tono de los dientes naturales.</p>
                </div>
                <div class="service"> 
                    <img src={placeholder2} alt='something' width="200px"/>
                    <h3>Retenedores!</h3>
                    <p>El uso de esta aparatología permite mantener en correcta posición los dientes post tratamiento de ortodoncia.</p>
                </div>
                <div class="service"> 
                    <img src={placeholder3} alt='something' width="200px"/>
                    <h3>Y mucho mas!</h3>
                </div>
            </div>
        </div>
    );
};

export default Services;