import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecargaDTO } from '../dto/recharge.dto';
import { ResumenRecarga } from '../../Domain/models/recharge.model';

@Injectable({
  providedIn: 'root'
})
export class RecargaRepositoryImpl {
  private baseUrl = 'http://localhost:3000/api/recargas';

  constructor(private http: HttpClient) {}

  registrar(dto: RecargaDTO): Promise<void> {
    return this.http.post<void>(`${this.baseUrl}`, dto).toPromise();
  }

  obtenerResumen(): Promise<ResumenRecarga[]> {
    return this.http.get<ResumenRecarga[]>(`${this.baseUrl}/resumen`).toPromise().then(res => res ?? []);
  }
}
