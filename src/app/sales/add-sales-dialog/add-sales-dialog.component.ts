import { ProductsService } from './../../services/products.service';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalesService } from 'src/app/services/sales.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sales-dialog',
  templateUrl: './add-sales-dialog.component.html',
  styleUrls: ['./add-sales-dialog.component.scss'],
})
export class AddSalesDialogComponent implements OnInit {
  addSaleForm: FormGroup;
  submitted = false;
  sale = {
    saleID: '',
    client: '',
    product: '',
    unitPrice: '',
    quantity: '',
    saleDate: '',
    comment: '',
  };

  clientOptions =[];
  productOptions =[];

  constructor(
    private formBuilder: FormBuilder,
    private salesService: SalesService,
    private clientsService: ClientsService,
    private productService: ProductsService,
    private dialogRef: MatDialogRef<AddSalesDialogComponent>,

    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.saleID) {
      this.sale = this.data;
    }
    this.addSaleForm = this.formBuilder.group({
      client: ['', Validators.required],
      product: ['', Validators.required],
      unitPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      saleDate: ['', Validators.required],
      comment: [''],
    });
    this.getproductName();
    this.getClientsFullname();
    console.log('yasin' + ' ' + 'ERGAIBI');
    
  }

  addOrUpdateSale() {
    this.submitted = true;
    if (this.addSaleForm.invalid) {
      return;
    }
    this.salesService.addOrUpdateSale(this.sale).subscribe((res) => {
      console.log('Added');
    });
  }

  getClientsFullname(){
    this.clientsService.getClientsFullname().subscribe((res) => {
      this.clientOptions = res;
    });
  }
  
  getproductName(){
    this.productService.getProductName().subscribe((res) => {
      this.productOptions = res;
      
    });
  }

  get getFormControls() {
    return this.addSaleForm.controls;
  }
}
