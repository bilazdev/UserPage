import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { FormBuilder } from '@angular/forms';
import { UserDataService } from 'src/app/userData/user-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginFormGroup;

  constructor(private formBuilder: FormBuilder,private loginService: LoginService,private userData:UserDataService) {
    this.loginFormGroup = this.formBuilder.group({
      email: '',
      password: ''
    });
   }
  ngOnInit() {
  }

  loginSubmit(params){
    this.loginService.doRegister(params.email,params.password);
    console.log(params.email,"  ",params.password);
  }

}
