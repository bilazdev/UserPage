import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService   {
  constructor(private http:HttpClient) { }
  deleteUsers(ids:number[]){
    ids.forEach(id => {
      this.http.delete(`https://reqres.in/api/users/${id}`);
      console.log(id);
    });
  }
}
