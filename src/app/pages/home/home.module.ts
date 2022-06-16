import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PdfViewerModule
  ]
})
export class HomeModule { }
