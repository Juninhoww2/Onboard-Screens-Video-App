import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetstardedPageRoutingModule } from './getstarded-routing.module';

import { GetstardedPage } from './getstarded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetstardedPageRoutingModule
  ],
  declarations: [GetstardedPage]
})
export class GetstardedPageModule {}
