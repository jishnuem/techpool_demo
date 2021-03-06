import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    PdfViewerModule
  ]
})
export class DashboardModule { }
