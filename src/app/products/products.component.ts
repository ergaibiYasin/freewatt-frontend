import { TokenStorageService } from './../services/token-storage.service';
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
    'commentaire',
    'action'
  ];

  dataSource = [];

  private role: string[];
  isLoggedIn = false;
  isAdmin = false;

  constructor(private productService: ProductsService, private dialog: MatDialog, private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      
      this.getAllProducts();
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.isAdmin = this.role.includes('Admin');
    }else{
      this.loginPage();
    }
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

  loginPage(): void{
    window.location.assign("/login")
  }
  goBack(): void{
    window.history.back()
  }
}
