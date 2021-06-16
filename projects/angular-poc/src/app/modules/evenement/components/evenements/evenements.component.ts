import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CriteresRechercheEvenement } from '../../models/CriteresRechercheEvenement';
import { Evenement } from '../../models/evenement';
import { EvenementService } from '../../services/evenement.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  displayedColumns: string[] = ['dateScrutin', 'municipalite', 'type'];
  dataSource!: MatTableDataSource<Evenement>;

  constructor(
    private evenementService: EvenementService
  ) {
    this.evenementService.getEvenenemt().subscribe(
      result => this.dataSource = new MatTableDataSource(result)
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (evenement, property) => {
      switch (property) {
        case 'municipalite': return evenement.municipalite.nom;
        default: return evenement[property]; 
      }
    }
  }

  onRechercheSubmit(criteresRecherche: CriteresRechercheEvenement) {
    this.evenementService.rechercherEvenements(criteresRecherche).subscribe(
      result => { this.dataSource.data = result }
    );
  }

}
