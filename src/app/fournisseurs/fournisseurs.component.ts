import { AddFournisseurDialogComponent } from './add-fournisseur-dialog/add-fournisseur-dialog.component';
import { TokenStorageService } from './../services/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { FournisseursService } from './../services/fournisseurs.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent implements OnInit {

  displayedColumns: string[] = [
    'nom',
    'prenom',
    'email',
    'num',
    'action'
    
  ];

  dataSource = [];

  private role: string[];
  isLoggedIn = false;
  isAdmin = false;

  constructor(private fournisseursService: FournisseursService, private dialog: MatDialog, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      
      this.getAllFournisseurs();
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.isAdmin = this.role.includes('Admin');
    }else{
      this.loginPage();
    }
  }

  addFournisseur() {
    const dialogRef = this.dialog.open(AddFournisseurDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllFournisseurs();
    });
  }
  
  uppdateFournisseur(element) {
    var data = element;
    const dialogRef = this.dialog.open(AddFournisseurDialogComponent, {data});

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllFournisseurs();
    });
  }

  


  deleteFournisseur(element) {
    var data = {
      title : "Confirmation",
      message : "vous etes sure de suprimmer ce fournisseur ?"
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {data});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "success") {
        this.fournisseursService.deleteFournisseur(element.fournisseurID).subscribe((res)=>{
          if (res){
            this.getAllFournisseurs();
          }
        });
      }
      
    });
  }
  
  

  getAllFournisseurs(){
    this.fournisseursService.getAllFournisseurs().subscribe((res) => {
      this.dataSource = res;
    });
  }

  loginPage(): void{
    window.location.assign("/login")
  }
  goBack(): void{
    window.history.back()
  }


}
