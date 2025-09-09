import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRechargeComponent } from './Application/components/new-recharge/new-recharge.component';
import { RechargeResumeComponent } from './Application/components/recharge-resume/recharge-resume.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModuleModule } from './Application/components-module/components-module.module';




import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';



@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModuleModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync(),
        providePrimeNG({ 
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: 'false',
                }
                
            }
            
        })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
