import { Component } from '@angular/core';
import { RecargaService } from '../../../Infraestructure/service/recharge.service';
import { Recarga } from '../../../Domain/models/recharge.model';

interface Operador {
  name: 'Tigo' | 'Movistar' | 'Comcel' | 'Uff';
}

@Component({
  selector: 'app-new-recharge',
  templateUrl: './new-recharge.component.html',
  styleUrls: ['./new-recharge.component.scss'],
  providers: [RecargaService]
})
export class NewRechargeComponent {
 operadores: Operador[] = [];
  selectedOperador: Operador | undefined;
  numero: string = '';
  valor: number | undefined;

  constructor(private recargaService: RecargaService) {}

  ngOnInit(): void {
    this.operadores = [
      { name: 'Tigo' },
      { name: 'Movistar' },
      { name: 'Comcel' },
      { name: 'Uff' },
    ];
  }

  async submit(): Promise<void> {
    if (!this.selectedOperador || !this.numero || !this.valor) return;

    const recarga: Recarga = {
      operador: this.selectedOperador.name,
      numero: this.numero,
      valor: this.valor,
      vendedor: 'admin' // puedes reemplazarlo por el usuario logueado
    };

    await this.recargaService.registrar(recarga);

    this.selectedOperador = undefined;
  this.numero = '';
  this.valor = undefined;
  }
}
