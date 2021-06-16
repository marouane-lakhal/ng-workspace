import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from '../evenement/components/evenements/evenements.component';
import { FormulaireMunicipaliteComponent } from '../municipalite/components/formulaire-municipalite/formulaire-municipalite.component';
import { MunicipalitesComponent } from '../municipalite/components/municipalites/municipalites.component';

const routes: Routes = [
  {path: 'municipalites', component: MunicipalitesComponent},
  {path: 'evenements', component: EvenementsComponent},
  {path: 'formulaire-municipalite', component: FormulaireMunicipaliteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
