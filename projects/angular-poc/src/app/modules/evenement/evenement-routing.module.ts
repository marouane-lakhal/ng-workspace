import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEvenementComponent } from './components/detail-evenement/detail-evenement.component';

const routes: Routes = [
  {path: 'evenement/detail/:id', component: DetailEvenementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
