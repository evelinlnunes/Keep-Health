import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietChildGuard } from '../shared/diet-child.guard';
import { DietasComponent } from './dietas.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [DietChildGuard],
    children: [
      {
        path: '',
        component: DietasComponent
      },
      {
        path: ':id',
        component: DietDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietasRoutingModule { }