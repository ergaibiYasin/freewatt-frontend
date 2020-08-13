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

  url = "http://localhost:3000/product";

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<any>{
    return this.http.get(this.url + "/allProducts");
  }

  addOrUpdateProduct(data) : Observable<any>{
    return this.http.post(this.url + "/addOrUpdate", data);
  }
  
  deleteProduct(id) : Observable<any>{
    return this.http.delete(this.url + "/del/" + id);
  }
  
  
}
