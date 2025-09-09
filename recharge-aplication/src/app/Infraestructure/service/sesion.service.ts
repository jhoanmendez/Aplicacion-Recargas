import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly STORAGE_KEY = 'usuario';
  private usuarioSubject = new BehaviorSubject<{ nombre: string; rol: string } | null>(null);

  constructor() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      this.usuarioSubject.next(JSON.parse(data));
    }
  }

  setUsuario(usuario: { nombre: string; rol: string }): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuario));
    this.usuarioSubject.next(usuario);
  }

  getUsuario(): { nombre: string; rol: string } | null {
    return this.usuarioSubject.value;
  }

  getUsuario$() {
    return this.usuarioSubject.asObservable();
  }

  esAdmin(): boolean {
    return this.getUsuario()?.rol === 'Administrador';
  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.usuarioSubject.next(null);
  }
}
