const pool = require('../db/db');

exports.createCitaCompleta = async (req, res) => {
  const { 
    name_user, email_user, key_user, fk_rol, logic_user, 
    name_paciente, genre_paciente, birth_paciente, dir_paciente, telf_paciente, logic_paciente,
    fk_doctor, date_cita, time_cita, desc_cita, status_cita, logic_cita 
  } = req.body;

  // se crea un cliente dedicaco
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // crear nuevo usuario
    const userResult = await client.query(
      `INSERT INTO general.user (name_user, email_user, key_user, fk_rol, logic_user) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name_user, email_user, key_user, fk_rol, logic_user]
    ); 
    const fk_user = userResult.rows[0].id_user; //FK_USER PA LOS PACIENTES 

    // crear nuevo cliente
    const pacienteResult = await client.query(
      `INSERT INTO general.paciente (fk_user, name_paciente, genre_paciente, birth_paciente, dir_paciente, telf_paciente, logic_paciente) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [fk_user, name_paciente, genre_paciente, birth_paciente, dir_paciente, telf_paciente, logic_paciente]
    );
    const fk_paciente = pacienteResult.rows[0].id_paciente; // FK_PACIENTE PA LAS CITAS

    // crear nueva cita
    const citaResult = await client.query(
      `INSERT INTO general.citas (fk_paciente, fk_doctor, date_cita, time_cita, desc_cita, status_cita, logic_cita) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [fk_paciente, fk_doctor, date_cita, time_cita, desc_cita, status_cita, logic_cita]
    );

    await client.query('COMMIT');

    res.status(201).json(citaResult.rows[0]);

  } catch (err) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
};