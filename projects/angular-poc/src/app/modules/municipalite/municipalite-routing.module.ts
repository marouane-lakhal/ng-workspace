import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMunicipaliteComponent } from './components/detail-municipalite/detail-municipalite.component';

const routes: Routes = [
  {path: 'municipalite/detail/:id', component: DetailMunicipaliteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunicipaliteRoutingModule { }
