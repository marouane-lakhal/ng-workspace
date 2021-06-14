import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipalitesComponent } from '../municipalite/components/municipalites/municipalites.component';

const routes: Routes = [
  {path: 'municipalites', component: MunicipalitesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
