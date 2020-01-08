import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchUsersService {
  data;
  totalPages;

  constructor(private http:HttpClient) {

  }
  fetchUsers(page:number){
    return this.http.get(`https://reqres.in/api/users?page=${page}`)
  }
}
