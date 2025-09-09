const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { rol, correo, password } = req.body;

  // Simulación de autenticación
  if (correo === 'admin@recargas.com' && password === '1234') {
    return res.json({ nombre: 'Juan', rol });

  }

  if (correo === 'usuario@recargas.com' && password === '5678') {
    return res.json({ nombre: 'Pedro', rol });
  }

  return res.status(401).json({ error: 'Credenciales inválidas' });
});

module.exports = router;
