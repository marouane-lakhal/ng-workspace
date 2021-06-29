import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/angular-poc/src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TypeEvenement } from '../../shared/models/TypeEvenement';
import { UtilsService } from '../../shared/services/utils.service';
import { RechercheEvenement } from '../models/RechercheEvenement';
import { Evenement } from '../models/evenement';

const endpoint = environment.evenementUrl;

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  // rechercherEvenements(criteresRecherche: CriteresRechercheEvenement) {
  //   console.log("Critères de recherche", criteresRecherche);
  //   return this.evenement$.pipe(
  //     map(evenements =>
  //       evenements.filter(evenement => this.filtrerResultat(evenement, criteresRecherche))
  //     )
  //     , tap(result => console.log("Resultat recherche", result))
  //     , catchError(r => of([]))
  //   );
  // }

  // rechercherEvenements(criteresRecherche: CriteresRechercheEvenement) {
  //   console.log("Critères de recherche", criteresRecherche);
  //   return this.http.get<Evenement[]>(endpoint).pipe(
  //     map(evenements =>
  //       evenements.filter(evenement => this.filtrerResultat(evenement, criteresRecherche))
  //     )
  //     , tap(result => console.log("Resultat recherche", result))
  //     , catchError(r => of([]))
  //   );
  // }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  rechercherEvenements(rechercheEvenement: RechercheEvenement) {
    console.log("Critères de recherche", rechercheEvenement);
    console.log("JSON :", JSON.stringify(rechercheEvenement));
    return this.http.post<Evenement[]>(endpoint + "/recherche", rechercheEvenement, this.httpOptions)
      .pipe(tap(res => console.log(res)));
  }

  constructor(
    private utilsService: UtilsService,
    private http: HttpClient) { }

  // getEvenements(): Observable<Evenement[]> {
  //   return this.evenement$.pipe(
  //     //tap(result => console.log(result)),
  //     catchError(r => of([])));
  // }

  getEvenements() {
    return this.http.get<Evenement[]>(endpoint).pipe(
      //tap(res => console.log(res)),
      // map(r => { r.forEach(e => e.dateScrutin = new Date(e.dateScrutin)); return r }),
      tap(res => console.log(res)));
  }

  getEvenement(id: Number) {
    return this.http.get<Evenement>(endpoint + "/" + id).pipe(
      tap(event => console.log(event))
    );
  }

  updateEvenement(evenement: Evenement): Observable<any> {
    return this.http.put(endpoint + "/" + evenement.id, evenement, this.httpOptions).pipe(
      tap(_ => console.log(`updated event id=${evenement.id}`)),
      tap(_ => console.log("updated event", evenement)),
      catchError(this.handleError<any>('updateEvenement'))
    )
  }

  private filtrerResultat(e: Evenement, c: RechercheEvenement): boolean {
    return (c.dateScrutin ? e.dateScrutin.getTime() === c.dateScrutin.getTime() : true)
      && (c.typeEvenement ? e.typeEvenement as TypeEvenement === c.typeEvenement as TypeEvenement : true)
      && (c.municipalite ? this.utilsService.normaliserRecherche(e.municipalite.nom).includes(this.utilsService.normaliserRecherche(c.municipalite)) : true)
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

  // evenement$: Observable<Evenement[]> = of([{
  //   id: 1,
  //   dateScrutin: new Date(2021, 10, 7),
  //   typeEvenement: TypeEvenement.G,
  //   municipalite: {
  //     id: 1,
  //     code: "201",
  //     nom: 'Québec',
  //     version: 0
  //   },
  //   version: 0
  // },
  // {
  //   id: 2,
  //   dateScrutin: new Date(2021, 5, 15),
  //   typeEvenement: TypeEvenement.P,
  //   municipalite: {
  //     id: 3,
  //     code: "205",
  //     nom: 'Montréal',
  //     version: 0
  //   },
  //   version: 0
  // },
  // {
  //   id: 3,
  //   dateScrutin: new Date(2021, 1, 25),
  //   typeEvenement: TypeEvenement.R,
  //   municipalite: {
  //     id: 10,
  //     code: "2010",
  //     nom: 'Laval',
  //     version: 0
  //   },
  //   version: 0
  // },
  // {
  //   id: 4,
  //   dateScrutin: new Date(2021, 10, 7),
  //   typeEvenement: TypeEvenement.G,
  //   municipalite: {
  //     id: 10,
  //     code: "2010",
  //     nom: 'Laval',
  //     version: 0
  //   },
  //   version: 0
  // }
  //   ,
  // {
  //   id: 5,
  //   dateScrutin: new Date(2021, 10, 7),
  //   typeEvenement: TypeEvenement.G,
  //   municipalite: {
  //     id: 3,
  //     code: "205",
  //     nom: 'Montréal',
  //     version: 0
  //   },
  //   version: 0
  // }]);

}
