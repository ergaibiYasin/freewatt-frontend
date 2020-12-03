import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  user = {
    username: "",
    email: "",
    password: "",
    role: "",
  }

  options: string[] = ['Admin', 'Moderator'];

  constructor(private formBuilder : FormBuilder, private signupService: AuthService ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  signup(){
    if (this.signupForm.invalid) {
      return ;
    }
    this.signupService.signup(this.user).subscribe((res) =>{
      if(res.success){
        this.signupPage();

        alert(res.message)
        console.log("Added");
        console.log(res.success);
      }else{
        alert(res.message)
      }
      
    })

    
  }


  signupPage(): void{
    window.location.assign("")
  }


  get getFormControls(){
    return this.signupForm.controls ;
  }

}
