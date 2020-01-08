import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchOneUserService {
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute) {

  }
  fetchUsers(id:number){
        return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
