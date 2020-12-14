import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FournisseursService } from './../../services/fournisseurs.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-fournisseur-dialog',
  templateUrl: './add-fournisseur-dialog.component.html',
  styleUrls: ['./add-fournisseur-dialog.component.scss']
})
export class AddFournisseurDialogComponent implements OnInit {

  addFournisseurForm: FormGroup;
  submitted = false;
  fournisseur= {
    fournisseurID : '',
    nom : '',
    prenom : '',
    email : '',
    num : '',
  };



  constructor(private formBuilder: FormBuilder, private fournisseurService: FournisseursService, private dialogRef: MatDialogRef<AddFournisseurDialogComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit(): void {
    if (this.data && this.data.fournisseurID ) {
      this.fournisseur = this.data;
    }
    this.addFournisseurForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['',  Validators.required, Validators.email],
      num: ['', Validators.required],
    })
  }


  addOrUpdateFournisseur(){

    this.submitted = true;
    if (this.addFournisseurForm.invalid) {
      return ;
    }
    this.fournisseurService.addOrUpdateFournisseur(this.fournisseur).subscribe((res) =>{
      console.log("Added");
    })
  }

  

  get getFormControls(){
    return this.addFournisseurForm.controls ;
  }
  
}
