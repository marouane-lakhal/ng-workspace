import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from '../../../shared/models/candidat';

import { TypeEvenement, TypeEvenementLabels } from '../../../shared/models/TypeEvenement';
import { CustomDatePipe } from '../../../shared/pipes/custom-date.pipe';
import { Evenement } from '../../models/evenement';
import { EvenementService } from '../../services/evenement.service';
import { PopupCandidatComponent } from '../popup-candidat/popup-candidat.component';
import { RechercheEvenementComponent } from '../recherche-evenement/recherche-evenement.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.css']
})
export class DetailEvenementComponent implements OnInit {

  form!: FormGroup;
  id!: Number;

  typeEvenementLabels = TypeEvenementLabels;
  typeEvenements = Object.values(TypeEvenement);

  displayedColumns: string[] = ['select', 'nom', 'prenom', 'nbrVotes'];
  dataSource!: MatTableDataSource<Candidat>;
  selection = new SelectionModel<Candidat>(true, []);
  evenement!: Evenement;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private evenementService: EvenementService,
    public dialogCandidate: MatDialog,
    private location: Location,
    private snackBar: MatSnackBar
  ) { }

  @ViewChild(MatTable) table: MatTable<Candidat> | undefined;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getEvenement(this.id);
    this.initFormGroup();
  }

  initFormGroup() {
    this.form = this.fb.group({
      dateScrutin: '',
      municipalite: this.fb.group({
        code: '',
        nom: '',
      }),
      typeEvenement: ''
    });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  openDialogUpdateCandidate(candidat: Candidat) {
    let index = this.dataSource.data.indexOf(candidat);

    const dialogRef = this.dialogCandidate.open(PopupCandidatComponent, {
      data: candidat
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
        this.dataSource.data[index] = result;
        this.table?.renderRows();
      }
    });
  }

  openDialogAddCandidate() {
    const dialogRef = this.dialogCandidate.open(PopupCandidatComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
        this.dataSource.data.push(result);
        this.table?.renderRows();
      }
    });
  }

  deleteCandidate() {
    if (!this.selection.isEmpty()) {
      this.removeCandidat(this.selection.selected);
    }
    this.selection.clear();
    this.table?.renderRows();
  }

  private removeCandidat(candidats: Candidat[]) {
    candidats.forEach(item => {
      let index = this.dataSource.data.findIndex(d => d === item);
      this.dataSource.data.splice(index, 1);
    });
  }

  getEvenement(id: Number) {
    this.evenementService.getEvenement(id).subscribe(
      evenement => {
        this.evenement = evenement;
        evenement.dateScrutin = new Date(evenement.dateScrutin);
        this.form.patchValue(evenement);
        this.dataSource = new MatTableDataSource(evenement.candidats);
      });
  }

  onSubmit() {
    console.log(this.evenement);
    this.evenementService.updateEvenement(this.evenement).subscribe(
      evenement => {
        this.snackBar.open("Sauvegarde effectuée avec succès", "Fermer", {
          duration: 5000,
        });
        this.goBack();
      }
    );
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  goBack(): void {
    this.location.back();
  }
}
