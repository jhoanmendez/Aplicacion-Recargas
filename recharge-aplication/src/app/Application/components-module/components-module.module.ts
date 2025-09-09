import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRechargeComponent } from '../components/new-recharge/new-recharge.component';
import { RechargeResumeComponent } from '../components/recharge-resume/recharge-resume.component';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from '../shared/menubar/menubar.component';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
//import { Product } from '@/domain/product';
//import { ProductService } from '@/service/productservice';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    NewRechargeComponent, 
    RechargeResumeComponent,
    LoginComponent,
    MenubarComponent,


  ],

  imports: [
    CommonModule,
    FormsModule,
    Select,
    InputTextModule,
    ButtonModule,
    Menubar,
    TableModule



  ],

  exports: [
    NewRechargeComponent, 
    RechargeResumeComponent,
    LoginComponent,
    MenubarComponent,
  ]
})
export class ComponentsModuleModule { }
