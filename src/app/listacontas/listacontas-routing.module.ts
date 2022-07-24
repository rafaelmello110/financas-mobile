import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacontasPage } from './listacontas.page';

const routes: Routes = [
  {
    path: '',
    component: ListacontasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacontasPageRoutingModule {}
