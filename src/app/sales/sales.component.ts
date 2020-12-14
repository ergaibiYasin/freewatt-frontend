import { TokenStorageService } from './../services/token-storage.service';
import { SalesService } from './../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { AddSalesDialogComponent } from './add-sales-dialog/add-sales-dialog.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  displayedColumns: string[] = [
    'client',
    'product',
    'unitPrice',
    'quantity',
    'total',
    'saleDate',
    'comment',
    'action'
  ];

  dataSource = [];

  private role: string[];
  isLoggedIn = false;
  isAdmin = false;

  constructor(private salesService: SalesService, private dialog: MatDialog, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.getAllSales();
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.isAdmin = this.role.includes('Admin');
    }else{
      this.loginPage();
    }
  }

  getTotal(dataSource) {
    return this.dataSource.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

  getAllSales(){
    this.salesService.getAllSales().subscribe((res) => {
      this.dataSource = res;
    });
  }

  
  addSale() {
    const dialogRef = this.dialog.open(AddSalesDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllSales();
    });
  }

  uppdateSale(element) {
    var data = element;
    const dialogRef = this.dialog.open(AddSalesDialogComponent, {data});

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllSales();
    });
  }


  deleteSale(element) {
    var data = {
      title : "Confirmation",
      message : "vous etes sure de suprimmer cet facture ?"
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {data});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "success") {
        this.salesService.deleteSale(element.saleID).subscribe((res)=>{
          if (res){
            this.getAllSales();
          }
        });
      }
      
    });
  }

  loginPage(): void{
    window.location.assign("/login")
  }
  
}
