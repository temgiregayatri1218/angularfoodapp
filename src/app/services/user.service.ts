import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../service/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  postuserdata(user: User) {
    return this.http.post('http://localhost:3000/user', user);
  }

  getuserdata(user: User) {
    console.log(user);
    console.log("this service function works");
    return this.http.get<User[]>(`http://localhost:3000/user/?password=${user.password}`);
  }


}
