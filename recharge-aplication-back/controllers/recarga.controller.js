const Recarga = require('../models/recarga.model');
const service = require('../services/recarga.service');

function crearRecarga(req, res) {
  const { operador, numero, valor, vendedor } = req.body;
  const nueva = new Recarga(operador, numero, valor, vendedor);
  service.registrarRecarga(nueva);
  res.status(201).json({ mensaje: 'Recarga registrada' });
}

function resumenRecargas(req, res) {
  const resumen = service.obtenerResumen();
  res.json(resumen);
}

module.exports = { crearRecarga, resumenRecargas };
