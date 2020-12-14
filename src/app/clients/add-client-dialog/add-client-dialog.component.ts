import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientsService } from './../../services/clients.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialogComponent implements OnInit {

  addClientForm: FormGroup;
  submitted = false;
  client= {
    clientID : '',
    fullname : '',
    email : '',
    num : '',
  };

  constructor(private formBuilder: FormBuilder, private clientsService: ClientsService, private dialogRef: MatDialogRef<AddClientDialogComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit(): void {
    if (this.data && this.data.clientID ) {
      this.client = this.data;
    }
    this.addClientForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.email],
      num: [''],
    })
  }

  addOrUpdateClient(){

    this.submitted = true;
    if (this.addClientForm.invalid) {
      return ;
    }
    this.clientsService.addOrUpdateClient(this.client).subscribe((res) =>{
      console.log("Added");
    })
  }

  get getFormControls(){
    return this.addClientForm.controls ;
  }


}
