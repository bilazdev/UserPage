import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from '../../register.service';
import { UserDataService } from 'src/app/userData/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerFormGroup;

  constructor(private formBuilder: FormBuilder,private registerService: RegisterService,private userData:UserDataService) {
    this.registerFormGroup = this.formBuilder.group({
      email: '',
      password: ''
    });
   }

  ngOnInit() {
  }

  registerSubmit(params){
    this.registerService.doRegister(params.email,params.password);
    console.log(params.email,"  ",params.password);
  }

}
