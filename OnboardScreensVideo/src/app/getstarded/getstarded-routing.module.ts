import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetstardedPage } from './getstarded.page';

const routes: Routes = [
  {
    path: '',
    component: GetstardedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetstardedPageRoutingModule {}
