class Recarga {
  constructor(operador, numero, valor, vendedor) {
    this.operador = operador;
    this.numero = numero;
    this.valor = valor;
    this.vendedor = vendedor;
    this.fecha = new Date();
  }
}

module.exports = Recarga;
