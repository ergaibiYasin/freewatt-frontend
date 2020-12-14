import { baseUrl } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  constructor(private http: HttpClient) { }

  login(data): Observable<any>{
    
    return this.http.post(baseUrl + "login", data)
  }

  signup(data): Observable<any>{
    return this.http.post(baseUrl + 'signup', data)
  }
}
