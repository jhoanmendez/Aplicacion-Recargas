const recargas = [];

module.exports = {
  agregar: (recarga) => recargas.push(recarga),
  obtenerTodas: () => [...recargas],
};
