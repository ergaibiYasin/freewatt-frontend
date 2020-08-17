import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  url = "http://localhost:3000/sale";

  constructor(private http: HttpClient) { }

  getAllSales() : Observable<any>{
    return this.http.get(this.url + "/allSales");
  }

  addOrUpdateSale(data) : Observable<any>{
    return this.http.post(this.url + "/addOrUpdate", data);
  }
  
  deleteSale(id) : Observable<any>{
    return this.http.delete(this.url + "/del/" + id);
  }
}

