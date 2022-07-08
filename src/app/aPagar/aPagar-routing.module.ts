import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { aPagarPage } from './aPagar.page';

const routes: Routes = [
  {
    path: '',
    component: aPagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class aPagarPageRoutingModule {}
