import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Application/components/login/login.component';
import { NewRechargeComponent } from './Application/components/new-recharge/new-recharge.component';
import { RechargeResumeComponent } from './Application/components/recharge-resume/recharge-resume.component'; 


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recargas', component: NewRechargeComponent },
  { path: 'resumen', component: RechargeResumeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
