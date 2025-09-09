import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Infraestructure/service/user.service';
import { Router } from '@angular/router';
import { SessionService } from '../../../Infraestructure/service/sesion.service';

interface Role {
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  rols: Role[] = [];
  selectedRol: Role | undefined;
  correo: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private sessionService: SessionService) {}

  ngOnInit(): void {
    this.rols = [
      { name: 'Administrador' },
      { name: 'Usuario' },
    ];
  }

  async submit(): Promise<void> {
    if (!this.selectedRol || !this.correo || !this.password) return;

    const usuario = await this.authService.login(
      this.correo,
      this.password,
      this.selectedRol.name
    );

    if (usuario) {
      this.sessionService.setUsuario(usuario);
      // Redirigir al componente de recargas
      this.router.navigate(['/recargas']);
    }
    console.log('Usuario guardado:', this.sessionService.getUsuario());

  }
  
}
