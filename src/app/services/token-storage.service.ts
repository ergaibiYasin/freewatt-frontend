import { Injectable } from '@angular/core';


const tokenKey = 'ath-token';
const userKey = 'auth-user';


@Injectable({
  providedIn: 'root'
})


export class TokenStorageService {

  constructor() { }
  signOut(): void{
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void{
    window.sessionStorage.removeItem(tokenKey);
    window.sessionStorage.setItem(tokenKey, token)
  }

  public getToken(): String{
    return sessionStorage.getItem(tokenKey)
  }

  public saveUser (user): void {
    window.sessionStorage.removeItem(userKey);
    window.sessionStorage.setItem(userKey, JSON.stringify(user))
  }

  public getUser(): any{
    return JSON.parse(sessionStorage.getItem(userKey))
  }
}
