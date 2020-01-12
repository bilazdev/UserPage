import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from './userData/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template';
  constructor(private router:Router,private userData:UserDataService){}
  ngOnInit(){
    if(this.router.url == '/'){
      if(this.userData.isExsited()){
        this.router.navigateByUrl("/profile");

      }
      else{
        this.router.navigateByUrl("/register");
      }
    }
  }
}
