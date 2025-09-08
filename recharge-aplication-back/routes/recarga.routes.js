const express = require('express');
const router = express.Router();
const controller = require('../controllers/recarga.controller');

router.post('/', controller.crearRecarga);
router.get('/resumen', controller.resumenRecargas);

module.exports = router;
