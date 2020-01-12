import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { FormBuilder } from '@angular/forms';
import { UserDataService } from 'src/app/userData/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginFormGroup;
  disableSubmitButton;
  wrong;
  constructor(private formBuilder: FormBuilder,private loginService: LoginService,private userData:UserDataService,private router:Router) {
    this.loginFormGroup = this.formBuilder.group({
      email: '',
      password: ''
    });
   }
  ngOnInit() {
    this.disableSubmitButton = false;
    this.wrong = false;
  }

  loginSubmit(params){
    this.disableSubmitButton = true;
    this.wrong = false;
    this.loginService.doLogin(params.email,params.password).subscribe(
      (res:any) => {
          this.userData.update(params.email,params.password,res.token)
          this.router.navigateByUrl('/profile');
          this.disableSubmitButton = false;

        },
      err => {
      this.disableSubmitButton = false;
      this.wrong = true;
      console.log("Error occured");
  });
  }
  submit(){
    //this.disableSubmitButton = true;
  }
}
