import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  title = 'front-end';
  
  private role: string[];
  private username: string[];
  private email: string[];
  isLoggedIn = false;
  isAdmin = false;

  

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService) {
  }

  ngOnInit(): void{
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.username = user.username;
      this.email = user.email;
      this.isAdmin = this.role.includes('Admin');
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.assign("/login")
  }

  loginPage(): void{
    window.location.assign("/login")
  }

  

}
