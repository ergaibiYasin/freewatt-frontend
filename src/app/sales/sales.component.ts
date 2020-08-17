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
    'customerID',
    'productID',
    'unitPrice',
    'quantity',
    'saleDate',
    'comment',
    'action'
  ];

  dataSource = [];

  constructor(private salesService: SalesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllSales();

  }

  getAllSales(){
    this.salesService.getAllSales().subscribe((res) => {
      this.dataSource = res;
      console.log(res)
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
  
}
