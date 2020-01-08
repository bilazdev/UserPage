import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/userData/user-data.service';
import { FormBuilder } from '@angular/forms';
import { ProfileServiceService as ProfileService } from '../profile-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profileFormGroup;
  edit  = new BehaviorSubject<boolean>(false);
  constructor(private formBuilder: FormBuilder,private prfileService: ProfileService,private userData:UserDataService) {
    this.profileFormGroup = this.formBuilder.group({
      email: userData.email,
      password: userData.password
    });
    this.edit.subscribe(()=>{
      if(this.edit.value == false){
        this.profileFormGroup.controls['email'].disable();
        this.profileFormGroup.controls['password'].disable();
      }
      else{
          this.profileFormGroup.controls['email'].enable();
          this.profileFormGroup.controls['password'].enable();
        }
      });
  }


  ngOnInit() {
    this.edit.next(false)
  }
  profileSubmit(params){

  }

  editClick(){
    this.edit.next(!this.edit.value);
  }

}
