import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VosSignauxEnCoursPageRoutingModule } from './vos-signaux-en-cours-routing.module';

import { VosSignauxEnCoursPage } from './vos-signaux-en-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VosSignauxEnCoursPageRoutingModule
  ],
  declarations: [VosSignauxEnCoursPage]
})
export class VosSignauxEnCoursPageModule {}
