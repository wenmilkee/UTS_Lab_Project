import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtsteoriPage } from './utsteori.page';

const routes: Routes = [
  {
    path: '',
    component: UtsteoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtsteoriPageRoutingModule {}
