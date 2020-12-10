import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';
import { TokenStorageService } from './../services/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientsService } from './../services/clients.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  displayedColumns: string[] = [
    'fullname',
    'email',
    'num',
    'action'
    
  ];

  dataSource = [];

  private role: string[];
  isLoggedIn = false;
  isAdmin = false;

  constructor(private clientsService: ClientsService, private dialog: MatDialog, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      
      this.getAllClients();
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.isAdmin = this.role.includes('Admin');
    }else{
      this.loginPage();
    }

  }

  addClient() {
    const dialogRef = this.dialog.open(AddClientDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllClients();
    });
  }
  
  uppdateClient(element) {
    var data = element;
    const dialogRef = this.dialog.open(AddClientDialogComponent, {data});

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllClients();
    });
  }

  


  deleteClient(element) {
    var data = {
      title : "Confirmation",
      message : "vous etes sure de suprimmer ce client ?"
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {data});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "success") {
        this.clientsService.deleteClient(element.clientID).subscribe((res)=>{
          if (res){
            this.getAllClients();
          }
        });
      }
      
    });
  }
  
  

  getAllClients(){
    this.clientsService.getAllClients().subscribe((res) => {
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
