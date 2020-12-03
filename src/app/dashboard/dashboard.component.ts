import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private role: string[];
  isLoggedIn = false;
  isAdmin = false;
  constructor(private tokenStorageService: TokenStorageService) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      
      
        const user = this.tokenStorageService.getUser();
        this.role = user.role;
        this.isAdmin = this.role.includes('Admin');
      }else{
        this.loginPage();
      }
  }

  
  loginPage(): void{
    window.location.assign("/login")
  }

}
