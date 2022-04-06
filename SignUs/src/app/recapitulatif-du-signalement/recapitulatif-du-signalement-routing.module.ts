import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapitulatifDuSignalementPage } from './recapitulatif-du-signalement.page';

const routes: Routes = [
  {
    path: '',
    component: RecapitulatifDuSignalementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapitulatifDuSignalementPageRoutingModule {}
