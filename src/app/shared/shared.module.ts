import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PickupCallCardComponent } from '../components/pickup-call-card/pickup-call-card.component';

@NgModule({
  declarations: [PickupCallCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PickupCallCardComponent,
    IonicModule
  ]
})
export class SharedModule { }
