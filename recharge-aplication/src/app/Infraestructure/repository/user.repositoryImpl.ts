import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestDTO } from '../dto/loginRequestDTO';
import { Usuario } from '../../Domain/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryImpl {
  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  login(dto: LoginRequestDTO): Promise<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, dto).toPromise().then(response => {
      if (response === undefined) {
        throw new Error('No user returned from API');
      }
      return response;
    });
  }
}
