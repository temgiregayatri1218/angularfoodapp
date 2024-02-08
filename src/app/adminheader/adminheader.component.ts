import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent implements OnInit {

  constructor(private route:Router) { }
  searchdata='';
  ngOnInit(): void {
    
  }
  addproduct()
    {
      this.route.navigate(['/addproduct']); 
    }

    logoutadmin()
    {
      localStorage.removeItem('user');
      this.route.navigate(['/home']);
    }

    @Output()
    searcgedproduct:EventEmitter<string>=new EventEmitter<string>()
    searchproduct()
    {
      console.log(this.searchdata+" this data want to searched");
          this.searcgedproduct.emit(this.searchdata);
    }


    clickonadmin()
    {
      this.route.navigate(['/admin']);
    }

}
