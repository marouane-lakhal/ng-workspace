import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';
import { EvenementsComponent } from './components/evenements/evenements.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CustomDatePipe } from '../shared/pipes/custom-date.pipe';
import { RechercheEvenementComponent } from './components/recherche-evenement/recherche-evenement.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-CA'}
  ],
  declarations: [
    EvenementsComponent,
    CustomDatePipe,
    RechercheEvenementComponent
  ],
  imports: [
    CommonModule,
    EvenementRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class EvenementModule { }
