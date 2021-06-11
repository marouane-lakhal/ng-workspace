import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipalitesComponent } from './modules/municipalite/components/municipalites/municipalites.component';

const routes: Routes = [
  {path: 'municipalites', component: MunicipalitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }