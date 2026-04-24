const { Pool } = require('pg');

// Configura tu conexión a la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'odontologia',
  password: '1234',
  port: 5432,
});

module.exports = pool;
