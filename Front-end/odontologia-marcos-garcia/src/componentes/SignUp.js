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

  // 1. Centralizamos la lógica de inicio de sesión aquí
  const handleLoginSuccess = (rolAsignado, userData) => {
    setUser(userData);
    setSpecific(rolAsignado);
    setIsAuthenticated(true);
  };

  // 2. Lógica para cuando el cliente agenda una cita sin cuenta
  const handleCitaAgendada = () => {
    setStep('success');
  };

  // 3. Extraemos el switch a una función limpia de renderizado
  const renderDashboardArea = () => {
    switch (specific) {
      case "doctor": return <DoctorIndex />;
      case "secretaria": return <SecreIndex />;
      case "cliente": 
      default: 
        return <AppointmentSuccess />;
    }
  };

  // 4. Renderizado principal semántico
  return (
    <div className="App">
      <main>
        
        {isAuthenticated ? (
          /* --- VISTA DE USUARIO AUTENTICADO --- */
          <>
            {renderDashboardArea()}
            <Boton style={{ margin: '40px auto', display:'flex'}} rojo onClick={() => {
              setIsAuthenticated(false);
              setUser(null);
              setStep('form'); // Opcional: resetear la vista al salir
            }}>
              cerrar sesion
            </Boton>
          </>

        ) : (

          /* --- VISTA DE INVITADO (Formularios) --- */
          step === 'form' ? (
            
            <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
              <div className={styles.card1}>
                <AppointmentForm 
                  user={user} 
                  onSuccess={handleCitaAgendada} 
                />
              </div>
              <div className={styles.contenedor1}>
                {/* Asumimos que tu componente Login ahora acepta un 'onLogin' */}
                <Login onLogin={handleLoginSuccess} />
              </div>
            </div>

          ) : (
            // Si step === 'success' pero no está autenticado (Cliente agendó como invitado)
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