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
  disableSubmitButton;
  wrong;
  constructor(private formBuilder: FormBuilder,private registerService: RegisterService,private userData:UserDataService,private router:Router) {
    this.registerFormGroup = this.formBuilder.group({
      email: '',
      password: ''
    });
   }

  ngOnInit() {
    this.disableSubmitButton = false;
    this.wrong = false;
  }

  registerSubmit(params){
    this.disableSubmitButton = true;

    this.registerService.doRegister(params.email,params.password).subscribe(
      (res:any) => {
          this.userData.update(params.email,params.password,res.token);
          this.router.navigateByUrl('/profile');
          this.disableSubmitButton = false;
        },
      err => {
      this.disableSubmitButton = false;
      this.wrong = true;
      console.log("Error occured");
  });
  }

}
