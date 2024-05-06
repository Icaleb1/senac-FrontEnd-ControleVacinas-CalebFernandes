import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinacoesRoutingModule } from './vacinacoes-routing.module';
import { VacinacaoDetalheComponent } from './vacinacao-detalhe/vacinacao-detalhe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VacinacaoDetalheComponent
  ],
  imports: [
    CommonModule,
    VacinacoesRoutingModule,
    FormsModule
  ]
})
export class VacinacoesModule { }
