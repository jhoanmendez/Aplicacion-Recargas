export interface Recarga {
  operador: 'Tigo' | 'Movistar' | 'Comcel' | 'Uff';
  numero: string;
  valor: number;
  vendedor: string;
}

export interface ResumenRecarga {
  operador: string;
  vendedor: string;
  cantidad: number;
  valorTotal: number;
}

