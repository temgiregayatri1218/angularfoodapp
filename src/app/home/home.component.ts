import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { foods } from '../service/models/foods';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Foodproduct } from '../adminmodule/admin';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Foodproduct[] = [];
  newfood: Foodproduct[] = [];
  constructor(private service: ServicesService, private router: ActivatedRoute, private route: Router, private foodservice: FoodService) { }
  name = '';
  search = '';
  cartcheck: boolean = false;
  ngOnInit(): void {
    this.foods = [];

    this.foodservice.getallprducts().subscribe((data: Foodproduct[]) => {
      this.foods = data;
      console.log("Service for all food works data - ", data);
    });

    this.router.params.subscribe(params => {

      if (params['tag'].toLowerCase() == 'all') {
        this.foods = [];
        this.foodservice.getallprducts().subscribe((data: any) => {
          this.foods = data;
          console.log("Service for all food works");
        });
      }
      else if (params['tag']) {
        this.foods = [];
        console.log("this log cat execute");
        this.foodservice.getproductsbycategoery(params['tag']).subscribe((data: any) => {
          this.foods = data;
        })
      }
      else {
        this.foods = [];
        this.foodservice.getallprducts().subscribe((data: any) => {
          this.foods = data;
          console.log("Service for all food works");
        });
      }
    });

  }

  updateheader() {
    this.route.navigate(['/header']);
  }

  onlogoutuser(msg: any) {
    alert(msg);
    this.route.navigate(['/header']);
  }



  showpagedetail: boolean = true;
  navigatetopage(id: any) {
    this.route.navigate([`/foodpage/${id}`]);
    this.showpagedetail = false;
    this.foods = [];
  }
  searchvalue: string = '';
  onsearch() {
    console.log("on search function execute");
    console.log(this.searchvalue);
    this.foodservice.getsearchedproducts(this.searchvalue).subscribe((data: any) => {
      this.foods = data;
    })
  }
}


