import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {aReceberPageRoutingModule } from './aReceber-routing.module';

import { aReceberPage } from './aReceber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    aReceberPageRoutingModule
  ],
  declarations: [aReceberPage]
})
export class aReceberPageModule {}
