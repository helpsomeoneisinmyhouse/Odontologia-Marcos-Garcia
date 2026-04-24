const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

// Rutas para películas
router.get('/citas', citasController.getCitas);
router.get('/citas/:id', citasController.getCitasById); // Nueva ruta para obtener una película por ID
router.post('/citas', citasController.createCita);
router.put('/citas/:id', citasController.updateCita);
router.delete('/citas/:id', citasController.deleteCita);

module.exports = router;
