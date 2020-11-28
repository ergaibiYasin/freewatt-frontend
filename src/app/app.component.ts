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
  isLoggedIn = false;
  isAdmin = false;

  

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void{
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.isAdmin = this.role.includes('Admin');
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload()
  }

}
