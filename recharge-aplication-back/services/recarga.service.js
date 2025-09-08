const db = require('../data/recargas.db');

function registrarRecarga(recarga) {
  db.agregar(recarga);
}

function obtenerResumen() {
  const todas = db.obtenerTodas();
  const resumen = [];

  todas.forEach((r) => {
    const key = `${r.operador}-${r.vendedor}`;
    const existente = resumen.find(
      (x) => x.operador === r.operador && x.vendedor === r.vendedor
    );

    if (existente) {
      existente.cantidad += 1;
      existente.valorTotal += r.valor;
    } else {
      resumen.push({
        operador: r.operador,
        vendedor: r.vendedor,
        cantidad: 1,
        valorTotal: r.valor,
      });
    }
  });

  return resumen;
}

module.exports = { registrarRecarga, obtenerResumen };
