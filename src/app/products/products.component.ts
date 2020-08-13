import { element } from 'protractor';
import { ConfirmationDialogComponent } from './../shared/confirmation-dialog/confirmation-dialog.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'productName',
    'price',
    'description',
    'categoryID',
    'commentaire',
    'action'
  ];

  dataSource = [];

  constructor(private productService: ProductsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddProductDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllProducts();
    });
  }
  
  uppdateProduct(element) {
    var data = element;
    const dialogRef = this.dialog.open(AddProductDialogComponent, {data});

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllProducts();
    });
  }

  


  deleteProduct(element) {
    var data = {
      title : "Confirmation",
      message : "vous etes sure de suprimmer ce produit ?"
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {data});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "success") {
        this.productService.deleteProduct(element.productID).subscribe((res)=>{
          if (res){
            this.getAllProducts();
          }
        });
      }
      
    });
  }
  
  

  getAllProducts(){
    this.productService.getAllProducts().subscribe((res) => {
      this.dataSource = res;
    });
  }
}
