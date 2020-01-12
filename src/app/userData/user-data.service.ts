import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
email: string;
password: string;
token: string;
lang: string;
  constructor() {
    this.email = localStorage.getItem("email");
    this.password = localStorage.getItem("password");
    this.token = localStorage.getItem("token");
   }

  delete(){
    localStorage.clear();
    //localStorage.setItem("email",null);
    //localStorage.setItem("password",null);
    //localStorage.setItem("token",null);
  }
  update(email: string,password:string,token:string){
    localStorage.setItem("email",email);
    this.email = email;
    localStorage.setItem("password",password);
    this.password = password;
    localStorage.setItem("token",token);
    this.token = token;

  }
  isExsited(){
    if(localStorage.getItem("email")== null && localStorage.getItem("password")== null && localStorage.getItem("token")== null){
      return false;
    } else return true;
  }
}
