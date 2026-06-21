import React from 'react';
import styles from '../styles/components.module.css';

const AppointmentSuccess = () => (
  <div className={styles.card} style={{ textAlign: 'center' }}>
    <h2 style={{ color: '#28a745' }}>¡Cita registrada con éxito!</h2>
    <p>Su solicitud ha sido enviada al Dr. Marcos García.</p>
    <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
      <strong>Estado de la cita:</strong> <span style={{ color: '#ff8c00' }}>Pendiente</span>
    </div>
    <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
      Podrá visualizar los detalles en su perfil personal próximamente.
    </p>
  </div>
);

export default AppointmentSuccess;