import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../services/products.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  displayedColumns: string[] = ['productName', 'price', 'description', 'categoryID', 'commentaire'];
  dataSource = [];


  constructor(private productService : ProductsService) { }

  ngOnInit() : void{

    this.productService.getAllProducts().subscribe(res =>{
      this.dataSource = res;
    }
    );
  }

}






  
