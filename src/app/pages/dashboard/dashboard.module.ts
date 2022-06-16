import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule
  ]
})
export class DashboardModule { }
