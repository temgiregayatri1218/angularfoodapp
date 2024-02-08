import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foodproduct } from '../adminmodule/admin';
import { HttpClient } from '@angular/common/http';
import { ProductserviceService } from '../Adminservice/productservice.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(private route:Router,private service:ProductserviceService,private activateroute:ActivatedRoute,private foodservice:FoodService) { }
  @ViewChild('productdetails')
  productform!: NgForm;
  productdata:Foodproduct[]=[];

  updatedproduct:Foodproduct=new Foodproduct();
  length=0;
  pname='';
  ptags!:string[];
  porigin!:string[];
  pprice=0;
  pcooktime='';
  purl='';
  pid=0;

  checkbutton=true;
  id!:number;
  ngOnInit(): void
  {
  this.service.getproductdata().subscribe(data=>
    {
      this.productdata=data;
      this.length=this.productdata.length;
    });


    this.id=this.activateroute.snapshot.params['id'];
    this.foodservice.getproductbyid(this.id).subscribe(data=>
      {
        this.updatedproduct=data;
        this.pname=this.updatedproduct.name;
        this.pid=this.updatedproduct.id;
        this.pprice=this.updatedproduct.price;
        this.pcooktime=this.updatedproduct.cooktime;
        this.purl=this.updatedproduct.imageUrl;
        this.ptags=this.updatedproduct.origin;
        this.porigin=this.updatedproduct.origin;
      });

      if(this.id)
      {
        this.checkbutton=false;
      }
      
  }


  newproduct:Foodproduct=new Foodproduct();

  onsubmit(value:any)
  {
   
    this.newproduct.name=this.productform.value.name;
    this.newproduct.price=this.productform.value.price;
    this.newproduct.origin=this.productform.value.origin;
    this.newproduct.cooktime=this.productform.value.cooktime;
    this.newproduct.imageUrl=this.productform.value.image;
    this.newproduct.tags=this.productform.value.tag;
    console.log(this.newproduct);
    if(value=='submit')
    {

      this.newproduct.id=this.length+1;
      this.service.postproductdata(this.newproduct).subscribe((data)=>
      {
        console.log("This is response of the request : ");
      });
    }
    else
    {
      this.newproduct.id=this.id;
      this.service.updatefoodproduct(this.id,this.newproduct).subscribe((data)=>
      {
        console.log(data);
        console.log("Gayatri Your Data Updated Sucessfully !!!!!!!!");
      })

    }
    this.route.navigateByUrl('/admin');
   // this.route.navigate(['/admin']);
   
  }

}
