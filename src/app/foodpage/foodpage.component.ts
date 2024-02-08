import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { foods } from '../service/models/foods';
import { CarserviceService } from '../carservice.service';
import { CartService } from '../services/cart.service';
import { cartfooditem } from '../service/models/carditem';
import { FoodService } from '../services/food.service';
import { Foodproduct } from '../adminmodule/admin';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  food!:Foodproduct;
  newcartproduct:cartfooditem=new cartfooditem();
  constructor(private activateroute:ActivatedRoute, private service:ServicesService, private cartservice:CartService, private route:Router, private foodservice:FoodService) { 
    activateroute.params.subscribe((params)=>
    {
      if(params['id'])
      {
        console.log(params['id']);
        this.foodservice.getproductbyid(params['id']).subscribe((data:any)=>
        {
          this.food=data;
        })
      }
    });
  }
    
  ngOnInit(): void {
    this.activateroute.params.subscribe((params)=>
    {
      if(params['id'])
      {
        let number=params['id'];
        this.foodservice.getproductbyid(number).subscribe((data:any)=>
        {
          this.food=data;
        })
      }
    });
  }

  getalldata()
  {
    let user=localStorage.getItem('user');
    if(user)
    {
      let userdetail=JSON.parse(user);
      this.newcartproduct.nameofuser=userdetail.name;
      this.newcartproduct.mobile=userdetail.mobile;
      this.newcartproduct.password=userdetail.password;
      this.newcartproduct.username=userdetail.username;
      this.newcartproduct.address=userdetail.address;
    }
    
    this.newcartproduct.nameoffood=this.food.name;
    this.newcartproduct.price=this.food.price;
    this.newcartproduct.imageurl=this.food.imageUrl;
  }
 
  addTocart()
  {
    this.getalldata();
    this.cartservice.postcartfooditem(this.newcartproduct).subscribe(data=>
      {
        console.log("product added to cart");
      });
    this.route.navigateByUrl('/cartitem');
  }

  

}
