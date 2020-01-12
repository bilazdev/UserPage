import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserDataService } from '../userData/user-data.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient,private userData:UserDataService,private router:Router) { }
  doRegister(email: string,password: string){
    const messege = {
      email:"eve.holt@reqres.in",
      password:"pistol"
    }
    return this.http.post('https://reqres.in/api/register', {
            password: password,
            email: email
          })
        
  }
}
