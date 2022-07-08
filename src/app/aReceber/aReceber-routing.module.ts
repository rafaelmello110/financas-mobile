import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { aReceberPage } from './aReceber.page';

const routes: Routes = [
  {
    path: '',
    component: aReceberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class aReceberPageRoutingModule {}
