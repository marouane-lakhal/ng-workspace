import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TypeEvenement, TypeEvenementLabels } from '../../../shared/models/TypeEvenement';
import { CriteresRechercheEvenement } from '../../models/CriteresRechercheEvenement';
import { EvenementService } from '../../services/evenement.service';

@Component({
  selector: 'app-recherche-evenement',
  templateUrl: './recherche-evenement.component.html',
  styleUrls: ['./recherche-evenement.component.css']
})
export class RechercheEvenementComponent implements OnInit {

  @Output() criteres = new EventEmitter<CriteresRechercheEvenement>();


  typeEvenementLabels = TypeEvenementLabels;
  typeEvenements = Object.values(TypeEvenement);


  constructor(
    private fb: FormBuilder,
    private evenementService: EvenementService
  ) {

  }

  form = this.fb.group({
    dateScrutin: '',
    municipalite: '',
    type: ''
  });

  onSubmit(criteresRecherche: CriteresRechercheEvenement) {
    this.criteres.emit(criteresRecherche);
  }

  onReset() {
    this.form.reset();
    this.criteres.emit(this.form.value);
  }

  ngOnInit(): void {
  }

}
