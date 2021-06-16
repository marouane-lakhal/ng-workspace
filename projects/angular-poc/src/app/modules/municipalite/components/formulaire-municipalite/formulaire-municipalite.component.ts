import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Municipalite } from '../../models/municipalite';
import { MunicipaliteService } from '../../services/municipalite.service';
import { UniqueMunicipaliteValidator } from './unique-municipalite-validator';


@Component({
  selector: 'app-formulaire-municipalite',
  templateUrl: './formulaire-municipalite.component.html',
  styleUrls: ['./formulaire-municipalite.component.css']
})

export class FormulaireMunicipaliteComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
    private municipaliteService: MunicipaliteService) { }

  form = this.formBuilder.group({
    code: ["", Validators.required],
    nom: ["", Validators.required, UniqueMunicipaliteValidator.createValidator(this.municipaliteService)]
  });

  ngOnInit(): void {
  }

  get aliases() {
    return this.form.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  get nom() {
    return this.form.get('nom') as FormControl;
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.get("code")?.setValue(11125);
  }
}
