import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TypeEvenement, TypeEvenementLabels } from '../../../shared/models/TypeEvenement';
import { RechercheEvenement } from '../../models/RechercheEvenement';

import { EvenementService } from '../../services/evenement.service';

@Component({
  selector: 'app-recherche-evenement',
  templateUrl: './recherche-evenement.component.html',
  styleUrls: ['./recherche-evenement.component.css']
})
export class RechercheEvenementComponent implements OnInit {

  @Output() criteres = new EventEmitter<RechercheEvenement>();


  typeEvenementLabels = TypeEvenementLabels;
  typeEvenements = Object.values(TypeEvenement);


  constructor(
    private fb: FormBuilder,
    private evenementService: EvenementService
  ) {

  }

  form = this.fb.group({
    dateScrutin: null,
    municipalite: null,
    typeEvenement: null
  });

  onSubmit(criteresRecherche: RechercheEvenement) {
    this.criteres.emit(criteresRecherche);
  }

  onReset() {
    this.form.reset();
    this.criteres.emit(this.form.value);
  }

  ngOnInit(): void {
  }

}
