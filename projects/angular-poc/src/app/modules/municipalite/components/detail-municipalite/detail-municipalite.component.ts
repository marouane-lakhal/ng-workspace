import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipaliteService } from '../../services/municipalite.service';
import { Location } from '@angular/common';
import { Municipalite } from '../../models/municipalite';

@Component({
  selector: 'app-detail-municipalite',
  templateUrl: './detail-municipalite.component.html',
  styleUrls: ['./detail-municipalite.component.css']
})
export class DetailMunicipaliteComponent implements OnInit {

  @Input() municipalite?: Municipalite;

  constructor(
    private route: ActivatedRoute,
    private municipaliteService: MunicipaliteService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMunicipalite();
  }

  getMunicipalite() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.municipaliteService.getMunicipalite(id).subscribe(mun => this.municipalite = mun );
  }

  goBack() {
    this.location.back();
  }
}
