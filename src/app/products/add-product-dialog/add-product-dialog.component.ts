import { FournisseursService } from './../../services/fournisseurs.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {
  
  addProductForm: FormGroup;
  submitted = false;
  product= {
    productID : '',
    productName : '',
    fournisseur : '',
    price : '',
    description : '',
    commentaire : ''
  };

  options = [];
   
  constructor(private formBuilder : FormBuilder, private productService: ProductsService, private fournisseurService: FournisseursService, private dialogRef: MatDialogRef<AddProductDialogComponent>,
    
    @Inject(MAT_DIALOG_DATA) private data
    ) { }

  ngOnInit(): void {
    if (this.data && this.data.productID ) {
      this.product = this.data;
    }
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      fournisseur: [''],
      price: ['', Validators.required],
      description: [''],
      commentaire: [''],
      
    });
    this.getFournisseurFullname();
  }

  addOrUpdateProduct(){

    this.submitted = true;
    if (this.addProductForm.invalid) {
      return ;
    }
    this.productService.addOrUpdateProduct(this.product).subscribe((res) =>{
      console.log("Added");
    })
  }

  getFournisseurFullname(){
    this.fournisseurService.getFournisseurFullname().subscribe((res) => {
      this.options = res;
    });
  }


  get getFormControls(){
    return this.addProductForm.controls ;
  }

}