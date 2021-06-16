import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MunicipaliteRoutingModule } from './municipalite-routing.module';
import { DetailMunicipaliteComponent } from './components/detail-municipalite/detail-municipalite.component';
import { MunicipalitesComponent } from './components/municipalites/municipalites.component';

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormulaireMunicipaliteComponent } from './components/formulaire-municipalite/formulaire-municipalite.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    MunicipalitesComponent,
    DetailMunicipaliteComponent,
    FormulaireMunicipaliteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MunicipaliteRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule, 
    MatProgressSpinnerModule
  ],
  exports: [
    MunicipalitesComponent
  ]
})
export class MunicipaliteModule { }
