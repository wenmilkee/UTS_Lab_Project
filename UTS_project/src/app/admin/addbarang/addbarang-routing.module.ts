import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbarangPage } from './addbarang.page';

const routes: Routes = [
  {
    path: '',
    component: AddbarangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbarangPageRoutingModule {}
