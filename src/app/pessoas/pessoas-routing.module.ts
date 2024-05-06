import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';

const routes: Routes = [
  { path: '', component: PessoaListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
