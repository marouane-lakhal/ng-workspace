import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Location } from '@angular/common';

import { Municipalite } from '../../models/municipalite';
import { MunicipaliteService } from '../../services/municipalite.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-municipalites',
  templateUrl: './municipalites.component.html',
  styleUrls: ['./municipalites.component.css']
})
export class MunicipalitesComponent implements AfterViewInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // municipalites: Municipalite[] = [];
  displayedColumns: string[] = ['id', 'code', 'nom'];
  dataSource!: MatTableDataSource<Municipalite>;

  

  constructor(private municipaliteService: MunicipaliteService,
    private location: Location) {

  }

  // ngOnInit(): void {
  //   this.getMunicipalites();
  // }

  ngAfterViewInit () {
    this.getMunicipalites();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getMunicipalites() {
    // this.municipaliteService.getMunicipalites().subscribe(municipalites => this.dataSource = new MatTableDataSource(municipalites));
    this.municipaliteService.getMunicipalites().subscribe(
      mun => {
        this.dataSource = new MatTableDataSource(mun);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  goBack() {
    this.location.back();
  }


}
