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



@NgModule({
  declarations: [
    MunicipalitesComponent,
    DetailMunicipaliteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MunicipaliteRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MunicipalitesComponent
  ]
})
export class MunicipaliteModule { }
