import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../service/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private userservice:UserService, private route:Router) { }
  @ViewChild('signupform')
  signup!: NgForm;
  ngOnInit(): void {
  }

  newuser:User=new User();
  onsubmit()
  {
    this.newuser.name=this.signup.value.name;
    this.newuser.mobile=this.signup.value.mobile;
    this.newuser.address=this.signup.value.address;
    this.newuser.password=this.signup.value.password;
    this.newuser.username=this.signup.value.username;
    this.userservice.postuserdata(this.newuser).subscribe(data=>
      {
        console.log("data stored sucessfully");
      });
      this.route.navigate(['/login']);
  }

}
