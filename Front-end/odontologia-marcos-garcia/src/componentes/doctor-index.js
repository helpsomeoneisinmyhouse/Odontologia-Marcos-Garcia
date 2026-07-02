import React from "react";
import styles from '../styles/components.module.css';
import CalendarioDoctorSemana from "./Calendar";

const DoctorIndex = () => {

  return (
        <div>
            <h1 style={{ textAlign : 'center' }}>ESTA ES LA PAGINA DEL DOCTOR</h1>
            <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
                <div className={styles.schec2}>
                    <h3 className={styles.schectitle}>semana</h3>
                    
                    <div id="calanedar"></div>
                    <CalendarioDoctorSemana rol={{rol : 'doctor'}}/>

                </div>
            </div>
        </div>
    ); 
};

export default DoctorIndex;