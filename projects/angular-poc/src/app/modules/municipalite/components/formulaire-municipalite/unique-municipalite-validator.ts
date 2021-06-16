import { Directive, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, delay, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { Municipalite } from '../../models/municipalite';
import { MunicipaliteService } from '../../services/municipalite.service';


export class UniqueMunicipaliteValidator {

  static createValidator(municipaliteService: MunicipaliteService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return municipaliteService.getMunicipalites().pipe(
        debounceTime(3000),

        // ignore new term if same as previous term
        distinctUntilChanged(),
        delay(5000),
        map(municipalites => municipalites.some(mun => mun.nom === control.value)), tap(already => console.log(already + " " + control.value)),
        map(alreadyExist => (alreadyExist ? { municipaliteExiste: true } : null)), catchError(() => of(null)), tap(r => console.log(r)));
    };
  }

  constructor(private municipaliteService: MunicipaliteService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.municipaliteService.getMunicipalites().pipe(
      map(municipalites => municipalites.some(mun => mun.nom === control.value)),
      map(alreadyExist => (alreadyExist ? { municipaliteExiste: true } : null)), catchError(() => of(null)));
  }

}
