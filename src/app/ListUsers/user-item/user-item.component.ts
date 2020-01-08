import { Component, OnInit ,Input, OnDestroy} from '@angular/core';
import { DeleteUserService } from '../delete-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit ,OnDestroy {
  @Input() id:number;
  @Input() first_name:string;
  @Input() last_name:string;
  @Input() email:string;
  @Input() imageURL:string;
  verification:boolean;
  deleteHTML:string;
  deleted: boolean;
  ids:number[];
  constructor(private deleteUser:DeleteUserService) {  }

  ngOnInit() {
    this.verification = false;
    this.deleteHTML = 'delete';
    this.ids = []
  }
  ngOnDestroy(){
    this.deleteUser.deleteUsers(this.ids);
  }

  delete(){
    if(!this.verification){
      this.deleteHTML = 'sure'
      this.verification = true;
    } else {
        if(!this.deleted){
          this.sureDelete()
        }
          else
        this.undo();
    }
   }

  sureDelete(){
    this.ids.push(this.id);
    this.deleteHTML = `undo`;
    this.deleted = true;

  }
  undo(){
    for( var i = 0; i < this.ids.length; i++){
      if ( this.ids[i] === this.id) {
        this.ids.splice(i, 1);
      }
   }    this.deleted = false;
    this.verification = false;
    this.deleteHTML = `delete`;

  }

}
