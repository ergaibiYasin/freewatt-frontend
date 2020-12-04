import { baseUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FournisseursService {


  constructor(private http: HttpClient) { }


  getAllFournisseurs() : Observable<any>{
    return this.http.get(baseUrl + "fournisseurs/allfournisseurs");
  }

  addOrUpdateFournisseur(data) : Observable<any>{
    return this.http.post(baseUrl + "fournisseurs/addOrUpdate", data);
  }
  
  deleteFournisseur(id) : Observable<any>{
    return this.http.delete(baseUrl + "fournisseurs/del/" + id);
  }

}
