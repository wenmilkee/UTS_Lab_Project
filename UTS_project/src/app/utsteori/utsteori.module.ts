import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtsteoriPageRoutingModule } from './utsteori-routing.module';

import { UtsteoriPage } from './utsteori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtsteoriPageRoutingModule
  ],
  declarations: [UtsteoriPage]
})
export class UtsteoriPageModule {}
