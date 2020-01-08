import { Component, OnInit, HostListener } from '@angular/core';
import { FetchOneUserService } from '../fetch-one-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.css']
})
export class SingleUserPageComponent implements OnInit {
  data;
  innerWidth;
  constructor(private fitchOneUser:FetchOneUserService,private activateRoute:ActivatedRoute) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
  }
  ngOnInit() {
    this.onResize(event);
    this.activateRoute.params.subscribe((params)=>{
      this.data = this.fitchOneUser.fetchUsers(params.id).subscribe((response : any)=>{
        this.data = response.data;
      });
    })
  }

}
