import { Component, OnInit, Input } from '@angular/core';
import { FetchUsersService } from '../fetch-users.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users-page',
  templateUrl: './list-users-page.component.html',
  styleUrls: ['./list-users-page.component.css']
})
export class ListUsersPageComponent implements OnInit {
  data:any;
  numberOfUsers;
  loaded;
  @Input() isASide:boolean = false;
  currentPage = new BehaviorSubject<number>(1);
  constructor(private fetchUsers:FetchUsersService) { }

  ngOnInit() {
    this.fetchUsers.fetchUsers(this.currentPage.value).subscribe((res:any)=>{
      this.data = res.data;
      this.numberOfUsers = Array(6).fill(0).map((x,i)=>i);
      this.loaded = false;
    });
      this.currentPage.subscribe(()=>{
        this.fetchUsers.fetchUsers(this.currentPage.value).subscribe((res:any)=>{
          this.loaded = true;
          if(res.data.length != 0)
            this.data = res.data;
          else{
            this.currentPage.next(this.currentPage.value - 1 );
          }

        });
      })
  }
    next(){
      this.currentPage.next(this.currentPage.value + 1);
    }
    back(){
      if(!(this.currentPage.value == 1))
      this.currentPage.next(this.currentPage.value - 1);
    }


}
