import { TokenStorageService } from './../../services/token-storage.service';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  user = {
    username: "",
    password: ""
  }
  isLoggedIn = false;
  isLoginFailed = false;
  role: string[] = [];

  hide = true;


  constructor(private formBuilder : FormBuilder, private loginService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
    }
  }



  login(){ 
    if (this.loginForm.invalid) {
      return ;
    }   

    this.loginService.login(this.user).subscribe((res) =>{
      if(res.success){
        this.tokenStorage.saveToken(res.accessToken);
        this.tokenStorage.saveUser(res);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().role;
        

        console.log(res);
        this.loginPage();
        alert(res.message)

        

      }else{
        alert(res.message)
      }
      
      
    })


    
  };

  goBack(): void{
    window.history.back()
  }
  reloadPage() : void {
    window.location.reload();
  }

  loginPage(): void{
    window.location.assign("/products")
  }


  

  get getFormControls(){
    return this.loginForm.controls ;
  }

}
