import { baseUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<any>{
    return this.http.get(baseUrl + "clients/allClients");
  }

  addOrUpdateClient(data) : Observable<any>{
    return this.http.post(baseUrl + "clients/addOrUpdate", data);
  }
  
  deleteClient(id) : Observable<any>{
    return this.http.delete(baseUrl + "clients/del/" + id);
  }

  getClientsFullname() : Observable<any>{
    return this.http.get(baseUrl + "clients/clientsFullname");
  }
}
