import { Injectable } from '@angular/core';
import { Recarga } from '../../Domain/models/recharge.model';
import { RecargaDTO } from '../dto/recharge.dto';
import { RecargaRepositoryImpl } from '../repository/recharge.repositoryImpl';
import { ResumenRecarga } from '../../Domain/models/recharge.model';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  constructor(private repo: RecargaRepositoryImpl) {}

  async registrar(recarga: Recarga): Promise<void> {
    const dto: RecargaDTO = { ...recarga };
    await this.repo.registrar(dto);
  }

  async obtenerResumen(): Promise<ResumenRecarga[]> {
    return await this.repo.obtenerResumen();
  }
}
