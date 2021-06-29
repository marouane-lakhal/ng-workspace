import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TypeEvenementLabels } from '../../../shared/models/TypeEvenement';

import { Evenement } from '../../models/evenement';
import { RechercheEvenement } from '../../models/RechercheEvenement';
import { EvenementService } from '../../services/evenement.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  typeEvenementLabels = TypeEvenementLabels;

  displayedColumns: string[] = ['dateScrutin', 'municipalite', 'typeEvenement'];
  dataSource!: MatTableDataSource<Evenement>;

  constructor(
    private evenementService: EvenementService
  ) {

  }

  ngAfterViewInit() {
    this.evenementService.getEvenements().subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (evenement, property) => {
          switch (property) {
            case 'municipalite': return evenement.municipalite.nom;
            default: return evenement[property];
          }
        }
      }
    );

  }

  onRechercheSubmit(criteresRecherche: RechercheEvenement) {
    this.evenementService.rechercherEvenements(criteresRecherche).subscribe(
      result => {
        this.dataSource.data = result
      }
    );

    //this.evenementService.getEvenementTest().subscribe();
  }

}
