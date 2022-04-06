import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapitulatifDuSignalementPageRoutingModule } from './recapitulatif-du-signalement-routing.module';

import { RecapitulatifDuSignalementPage } from './recapitulatif-du-signalement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapitulatifDuSignalementPageRoutingModule
  ],
  declarations: [RecapitulatifDuSignalementPage]
})
export class RecapitulatifDuSignalementPageModule {}
