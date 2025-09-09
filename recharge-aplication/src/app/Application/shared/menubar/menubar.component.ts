import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SessionService } from '../../../Infraestructure/service/sesion.service';

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
items: MenuItem[] = [];

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService.getUsuario$().subscribe(usuario => {
      this.items = [
        { label: 'Home', icon: 'pi pi-home', routerLink: ['/recargas'] }
      ];

      if (usuario?.rol === 'Administrador') {
        this.items.push({
          label: 'Resumen',
          icon: 'pi pi-chart-bar',
          routerLink: ['/resumen']
        });
      }
    });
  }
}
