import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";


import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddProductDialogComponent } from './products/add-product-dialog/add-product-dialog.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { SalesComponent } from './sales/sales.component';
import { AddSalesDialogComponent } from './sales/add-sales-dialog/add-sales-dialog.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { AddFournisseurDialogComponent } from './fournisseurs/add-fournisseur-dialog/add-fournisseur-dialog.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientDialogComponent } from './clients/add-client-dialog/add-client-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductDialogComponent,
    ConfirmationDialogComponent,
    SalesComponent,
    AddSalesDialogComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    FournisseursComponent,
    AddFournisseurDialogComponent,
    ClientsComponent,
    AddClientDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,

    
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'fournisseurs', component: FournisseursComponent },
      { path: 'clients', component: ClientsComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
