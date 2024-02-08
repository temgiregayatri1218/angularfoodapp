import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { User } from '../service/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: string = '';
  userdata: User = new User();
  cartcheck: boolean = false;
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private route: Router) {
  }

  checkuser=true;
  username='';
  ngOnInit(): void {
    let data=localStorage.getItem('user');
    if(data)
    {
        let userdata=JSON.parse(data);
        this.username=userdata.name;
        console.log(userdata);
        this.checkuser=false;
    }
  }
  setpage = true;
  changepage() {
    this.setpage = false;
  }
  changepage1() {
    this.setpage = true;
    this.route.navigate(['/home']);
  }

  signuppage() {
    this.setpage = false;
    this.route.navigate(['/signup']);
  }
  loginconponent: boolean = true;
  checklogin() {
    this.loginconponent = false;
  }

  @Output()
  changeheader:EventEmitter<string>=new EventEmitter<string>();
  msg="User Loged Out";
  logoutuser()
  {
    localStorage.removeItem('user');
    this.changeheader.emit(this.msg);
    this.route.navigateByUrl('/home');
   
  }


}
