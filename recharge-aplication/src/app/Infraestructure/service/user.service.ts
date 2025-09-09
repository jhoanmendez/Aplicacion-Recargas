import { Injectable } from '@angular/core';
import { AuthRepositoryImpl } from '../repository/user.repositoryImpl';
import { Usuario } from '../../Domain/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private repo: AuthRepositoryImpl) {}

  async login(correo: string, password: string, rol: string): Promise<Usuario> {
    return await this.repo.login({ correo, password, rol });
  }
}
