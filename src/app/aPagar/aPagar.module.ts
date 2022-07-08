import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {aPagarPageRoutingModule } from './aPagar-routing.module';

import { aPagarPage } from './aPagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    aPagarPageRoutingModule
  ],
  declarations: [aPagarPage]
})
export class aPagarPageModule {}
