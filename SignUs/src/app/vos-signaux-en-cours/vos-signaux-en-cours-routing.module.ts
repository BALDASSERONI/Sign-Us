import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VosSignauxEnCoursPage } from './vos-signaux-en-cours.page';

const routes: Routes = [
  {
    path: '',
    component: VosSignauxEnCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VosSignauxEnCoursPageRoutingModule {}
