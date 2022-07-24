import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacontasPageRoutingModule } from './listacontas-routing.module';

import { ListacontasPage } from './listacontas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacontasPageRoutingModule
  ],
  declarations: [ListacontasPage]
})
export class ListacontasPageModule {}
