import { Component } from '@angular/core';
import { RecargaService } from '../../../Infraestructure/service/recharge.service';
import { ResumenRecarga } from '../../../Domain/models/recharge.model';

@Component({
  selector: 'app-recharge-resume',
  templateUrl: './recharge-resume.component.html',
  styleUrl: './recharge-resume.component.scss'
})
export class RechargeResumeComponent {
  value: string = '';

  resumenRecargas: ResumenRecarga[] = [];

    constructor(private recargaService: RecargaService) {}

    ngOnInit() {
        this.recargaService.obtenerResumen().then((data) => {
            this.resumenRecargas = data;
        });
    }
}
