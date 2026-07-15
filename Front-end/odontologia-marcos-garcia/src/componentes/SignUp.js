import React, { useState } from 'react';
import Login from './Login';
import AppointmentForm from './AppointmentForm';
import AppointmentSuccess from './AppointmentSuccess';
import styles from '../styles/components.module.css';
import DoctorIndex from './doctor-index';
import SecreIndex from './secretaria-index';
import Boton from '../elementos/boton.js';

export default function SignUp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [step, setStep] = useState('form'); // 'form' o 'success'
  const [specific, setSpecific] = useState('cliente');

  const handleLoginSuccess = (rolAsignado, userData) => {
    setUser(userData);
    setSpecific(rolAsignado);
    setIsAuthenticated(true);
  };

  const handleCitaAgendada = () => {
    setStep('success');
  };

  const renderDashboardArea = () => {
    switch (specific) {
      case "doctor": return <DoctorIndex />;
      case "secretaria": return <SecreIndex />;
      case "cliente": 
      default: 
        return <AppointmentSuccess />;
    }
  };

  return (
    <div className="App">
      <main>
        
        {isAuthenticated ? (
          <>
            {renderDashboardArea()}
            <Boton style={{ margin: '40px auto', display:'flex'}} rojo onClick={() => {
              setIsAuthenticated(false);
              setUser(null);
              setStep('form');
            }}>
              cerrar sesion
            </Boton>
          </>

        ) : (

          step === 'form' ? (
            
            <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
              <div className={styles.card1}>
                <AppointmentForm 
                  user={user} 
                  onSuccess={handleCitaAgendada} 
                />
              </div>
              <div className={styles.contenedor1}>
                <Login onLogin={handleLoginSuccess} />
              </div>
            </div>

          ) : (
            <>
              <AppointmentSuccess />
              <Boton onClick={() => setStep('form')}>Volver al inicio</Boton>
            </>
          )

        )}

      </main>
    </div>
  );
}