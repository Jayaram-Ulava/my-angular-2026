import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpiComponent } from './upi/upi.component';
import { CardPayComponent } from './card-pay/card-pay.component';


@NgModule({
  declarations: [
    UpiComponent,
    CardPayComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
