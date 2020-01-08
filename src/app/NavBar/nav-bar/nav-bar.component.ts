import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/userData/user-data.service';
import { Router } from '@angular/router';
import { TranslateService } from 'src/app/Translation/translate.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  lang;
  constructor(private userData:UserDataService,private router :Router,private translate:TranslateService) { }

  ngOnInit() {
  }

  onChange(event){
    if(event.checked)
      this.translate.language = 'ar';
    else
      this.translate.language = 'en';

  }

  logout(){
    this.userData.delete();
    this.router.navigateByUrl("/login");
  }

}
