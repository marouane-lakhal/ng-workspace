import { getLocaleCurrencyCode } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, Inject, Injectable, LOCALE_ID, OnInit } from '@angular/core';
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

  date: Date = new Date();
  amount: number = 0.259;
  c: string | null = getLocaleCurrencyCode(this.locale);

  constructor(
    private formBuilder: FormBuilder,
    private municipaliteService: MunicipaliteService,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DEFAULT_CURRENCY_CODE) public codeCur: string) { }

  form = this.formBuilder.group({
    code: ["", Validators.required],
    nom: ["", Validators.required, UniqueMunicipaliteValidator.createValidator(this.municipaliteService)]
  });

  ngOnInit(): void {
  }

  get nom() {
    return this.form.get('nom') as FormControl;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
