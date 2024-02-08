import { Component, OnInit } from '@angular/core';
import { Foodproduct } from '../adminmodule/admin';
import { ProductserviceService } from '../Adminservice/productservice.service';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productdata:Foodproduct[]=[];
  constructor(private service:ProductserviceService, private route:Router,private foodservice:FoodService) { }
  updateproduct:Foodproduct=new Foodproduct();
  ngOnInit(): void 
  {
      this.service.getproductdata().subscribe((data:any)=>
      {
          this.productdata=data;
      });
  }

  ondelete(id:any)
  {
    this.service.deleteproduct(id).subscribe(data=>{
      console.log(data);
    });
    alert("product deleted sucessfully!!!!");
    this.service.getproductdata().subscribe((data:any)=>
    {
        this.productdata=data;
    });
  }

  onupdate(id:any)
  {
      this.route.navigate([`/updateproduct/${id}`]);
  }
  updateavailabledata(product:any)
  {
    this.updateproduct.id=product.id;
      this.updateproduct.name=product.name;
      this.updateproduct.price=product.price;
      this.updateproduct.available=!product.available;
      this.updateproduct.cooktime=product.cooktime;
      this.updateproduct.origin=product.origin;
      this.updateproduct.imageUrl=product.imageUrl;
      this.updateproduct.tags=product.tags;
      this.service.updatefoodproduct(this.updateproduct.id,this.updateproduct).subscribe((data:any)=>
      {
        console.log("data Updated !!!!");
      });
      
      this.service.getproductdata().subscribe((data:any)=>
      {
          this.productdata=data;
      });
  }

  searchproduct(name:any)
  {
        this.foodservice.getsearchedproducts(name).subscribe((data:any)=>
        {
          this.productdata=data;
        });
  }

}
