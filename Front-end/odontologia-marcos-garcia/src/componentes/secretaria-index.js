// Filename - pages/SecreIndex.js

import React from "react";
import CalendarioDoctorSemana from "./Calendar";
import styles from '../styles/components.module.css';

const SecreIndex = () => {
    return (
        <div>
            <h1 style={{ textAlign : 'center' }}>ESTA ES LA PAGINA DE LA SECRETARIA</h1>
            <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
                <div className={styles.schec2}>
                    <h3 className={styles.schectitle}>semana</h3>
                    
                    <div id="calanedar"></div>
                    <CalendarioDoctorSemana rol={{rol : 'secreto'}}/>

                </div>
            </div>
        </div>
    );
};

export default SecreIndex;