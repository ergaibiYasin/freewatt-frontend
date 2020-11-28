import { baseUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HTTP_OPTIONS = <any>{
  headers: new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8'
  }),
  // params: { '_v': new Date().getTime().toString() }
  };
  

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<any>{
    return this.http.get(baseUrl + "product/allProducts");
  }

  addOrUpdateProduct(data) : Observable<any>{
    return this.http.post(baseUrl + "product/addOrUpdate", data);
  }
  
  deleteProduct(id) : Observable<any>{
    return this.http.delete(baseUrl + "product/del/" + id);
  }
  
  
}
