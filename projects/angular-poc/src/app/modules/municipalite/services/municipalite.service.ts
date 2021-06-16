import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'projects/angular-poc/src/environments/environment';

import { Municipalite } from "../models/municipalite";

const endpoint = environment.municipaliteUrl;

@Injectable({
  providedIn: 'root'
})
export class MunicipaliteService {

  constructor(
    private http: HttpClient
  ) { }

  getMunicipalites() {
    return this.http.get<Municipalite[]>(endpoint).pipe(tap(res => console.log(res)),
      catchError(this.handleError<Municipalite[]>('getMunicipalites', [])));
  }

  getMunicipalite(id: any) {
    return this.http.get<Municipalite>(endpoint + "/" + id).pipe(
      tap(res => console.log(res)),
      catchError(this.handleError<Municipalite>('getMunicipalite',))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
