import { CarrosModule } from './carros/carros.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: 'vacinas',
    loadChildren: ()=>
      import('./vacinas/vacinas.module').then((m) => m.VacinasModule),

  },
  {
    path: 'pessoas',
    loadChildren: ()=>
      import('./pessoas/pessoas.module').then((m) => m.PessoasModule),
  },
  {
    path: 'vacinacoes',
    loadChildren: ()=>
      import('./vacinacoes/vacinacoes.module').then((m) => m.VacinacoesModule),
  },
  {
    path: 'carros',
    loadChildren: () =>
      import('./carros/carros.module').then((m) => m.CarrosModule),
  }
];
