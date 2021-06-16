import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TypeEvenement } from '../../shared/models/TypeEvenement';
import { UtilsService } from '../../shared/services/utils.service';
import { CriteresRechercheEvenement } from '../models/CriteresRechercheEvenement';
import { Evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  rechercherEvenements(criteresRecherche: CriteresRechercheEvenement) {
    console.log("Critères de recherche", criteresRecherche);
    return this.evenement$.pipe(
      map(evenements =>
        evenements.filter(evenement => this.filtrerResultat(evenement, criteresRecherche))
      )
      , tap(result => console.log("Resultat recherche", result))
      , catchError(r => of([]))
    );
  }

  constructor(private utilsService: UtilsService) { }

  getEvenenemt(): Observable<Evenement[]> {
    return this.evenement$.pipe(
      //tap(result => console.log(result)),
      catchError(r => of([])));
  }

  private filtrerResultat(e: Evenement, c: CriteresRechercheEvenement): boolean {
    return (c.dateScrutin ? e.dateScrutin.getTime() === c.dateScrutin.getTime() : true)
      &&(c.type ? e.type as TypeEvenement === c.type as TypeEvenement : true)
        && (c.municipalite ? this.utilsService.normaliserRecherche(e.municipalite.nom).includes(this.utilsService.normaliserRecherche(c.municipalite)) : true)
  }

  evenement$: Observable<Evenement[]> = of([{
    id: 1,
    dateScrutin: new Date(2021, 10, 7),
    type: TypeEvenement.G,
    municipalite: {
      id: 1,
      code: "201",
      nom: 'Québec',
      version: 0
    },
    version: 0
  },
  {
    id: 2,
    dateScrutin: new Date(2021, 5, 15),
    type: TypeEvenement.P,
    municipalite: {
      id: 3,
      code: "205",
      nom: 'Montréal',
      version: 0
    },
    version: 0
  },
  {
    id: 3,
    dateScrutin: new Date(2021, 1, 25),
    type: TypeEvenement.R,
    municipalite: {
      id: 10,
      code: "2010",
      nom: 'Laval',
      version: 0
    },
    version: 0
  },
  {
    id: 4,
    dateScrutin: new Date(2021, 10, 7),
    type: TypeEvenement.G,
    municipalite: {
      id: 10,
      code: "2010",
      nom: 'Laval',
      version: 0
    },
    version: 0
  }
    ,
  {
    id: 5,
    dateScrutin: new Date(2021, 10, 7),
    type: TypeEvenement.G,
    municipalite: {
      id: 3,
      code: "205",
      nom: 'Montréal',
      version: 0
    },
    version: 0
  }]);

}
