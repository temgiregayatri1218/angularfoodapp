import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../service/models/user';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  @ViewChild('loginform')
  form!: NgForm;
  constructor(private route:Router) { }
  userdata:User=new User();
  ngOnInit(): void {
  }

  getvalue()
  {
    console.log(this.form.value.name);
    console.log(this.form.value.password);
    this.userdata.username=this.form.value.name;
    this.userdata.password=this.form.value.password;
    localStorage.setItem("admin",JSON.stringify(this.userdata));
    this.route.navigate(['/admin']);
  }


}
