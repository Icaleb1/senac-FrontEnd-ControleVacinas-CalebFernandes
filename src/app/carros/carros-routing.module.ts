import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { MontadorasComponent } from './montadoras/montadoras.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'id', component: MontadorasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
