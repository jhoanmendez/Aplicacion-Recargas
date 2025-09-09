import { Recarga } from '../models/recharge.model';
import { ResumenRecarga } from '../models/recharge.model';

export abstract class RecargaRepository {
  abstract registrar(recarga: Recarga): Promise<void>;
  abstract obtenerResumen(): Promise<ResumenRecarga[]>;
}
