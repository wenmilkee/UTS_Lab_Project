import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbarangPageRoutingModule } from './addbarang-routing.module';

import { AddbarangPage } from './addbarang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbarangPageRoutingModule
  ],
  declarations: [AddbarangPage]
})
export class AddbarangPageModule {}
