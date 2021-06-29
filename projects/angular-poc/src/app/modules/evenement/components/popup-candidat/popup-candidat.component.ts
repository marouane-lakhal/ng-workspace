import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Candidat } from '../../../shared/models/candidat';

@Component({
  selector: 'app-popup-candidat',
  templateUrl: './popup-candidat.component.html',
  styleUrls: ['./popup-candidat.component.css']
})
export class PopupCandidatComponent implements OnInit {

  formCandidat!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopupCandidatComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Candidat
  ) { }

  ngOnInit(): void {
    this.initFormCandidat();
  }

  initFormCandidat() {
    console.log("inside popup candidat", this.data);
    this.formCandidat = this.fb.group({
      id: (this.data) ? this.data.id : null,
      nom: [(this.data) ? this.data.nom : null, Validators.required],
      prenom: [(this.data) ? this.data.prenom : null, Validators.required],
      nbrVotes: (this.data) ? this.data.nbrVotes : 0,
    })
  }

  ajouterCandidat() {
    this.dialogRef.close(this.formCandidat.value);
  }

  annuler() {
    this.dialogRef.close();
  }

  get nom() { return this.formCandidat.get('nom'); }

  get prenom() { return this.formCandidat.get('prenom'); }
}
