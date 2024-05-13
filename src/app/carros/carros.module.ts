import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { ListaComponent } from './lista/lista.component';
import { MontadorasComponent } from './montadoras/montadoras.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaComponent,
    MontadorasComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule
  ]
})
export class CarrosModule { }
