import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../service/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginform')
  form!: NgForm;
  constructor(private route: Router, private userservice: UserService) { }
  userdata: User = new User();

  ngOnInit(): void {
  }

  getvalue() {
    this.userdata.username = this.form.value.name;
    this.userdata.password = this.form.value.password;
    this.userservice.getuserdata(this.userdata).subscribe((data: User[]) => {
      // debugger;
      console.log("data is available");
      console.log(data);
      if (data){
        const result = data[0];
        alert("User Sucessfully logged in !!!!");
        localStorage.setItem("user", JSON.stringify(result));
        if (result.role == 'admin') {
          this.route.navigate(['/admin']);
        }
        else {
          this.route.navigate(['/home']);
        }
      }
      else {
        alert("user is unable to login");
        this.form.reset({
          name: '',
          password: ''
        });
      }
    });

  }

}
