import { Component, OnInit } from '@angular/core';
import { Cart } from '../service/models/cart';
import { CartService } from '../services/cart.service';
import { CartItem, cartfooditem } from '../service/models/carditem';
import { Router } from '@angular/router';
import { Paymentdetails } from '../service/models/paymentdetails';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit {
  cartitem:Cart[]=[];
  cart!:Cart;
  cart1:cartfooditem[]=[];
  checkout:boolean=true;
  totalpayment:number=0;
  paymentproduct:Paymentdetails=new Paymentdetails();
  arrayofpaymentproduct:Paymentdetails[]=[];
  constructor(private cartservice:CartService, private route:Router) { }

  ngOnInit(): void 
  {
    this.cartservice.getpaymentdata().subscribe((data:Paymentdetails[])=>
    {
          this.arrayofpaymentproduct=data;
    })
    this.setcart();
  }
  setcart()
  {
    this.cartservice.getfooddata().subscribe((data:any)=>
    {
      this.cart1=data;
      console.log("this is excute gayatri");
      console.log(data);
      console.log(this.cart1);
      this.cart1.forEach((data:cartfooditem)=>
      {
        this.totalpayment+=data.price;
      //  / console.log("Happy");
        console.log(this.totalpayment);
      });
    });
    
  }

  price:number=0;
  changeQuantity(cartItem:CartItem,quantityInString:string)
  {
    console.log("This is quantity function works");
    console.log(quantityInString);
    const quantity=parseInt(quantityInString);
    this.cart.totalprice;
    this.cartservice.changeQuantity(cartItem.food.id,quantity);
    this.price=this.cart.totalprice*quantity;
    this.setcart();
  }
  removefromcart(id:any)
  {
      this.cartservice.removeproductfromcart(id).subscribe((data)=>
      {
        console.log(data);
      });
      this.setcart();
  }
   previous=0;
  chengequantity(price:any,quantityInString:string)
  {
    console.log(quantityInString);
    const quantity=parseInt(quantityInString);
    
    if(this.previous<quantity)
    {

      this.totalpayment+=quantity*price;
      this.previous=quantity;
    }
    else
    {
        let value=this.previous-quantity;
        this.totalpayment-=this.previous*price;
        this.totalpayment+=value*price;
    }
    
  }
  proceedtopay()
  {
    this.paymentproduct.id=this.arrayofpaymentproduct.length+1;
    this.paymentproduct.arrayofproduct=this.cart1;
    this.paymentproduct.username=this.cart1[0].username;
    this.paymentproduct.totalpriceofproduct=this.totalpayment;
    this.paymentproduct.quantityofproduct=this.cart1.length;
    this.paymentproduct.address=this.cart1[0].address;
    this.paymentproduct.quantityofproduct=1;
    console.log("this data is before the saving on server");
    console.log(this.paymentproduct);
    this.cartservice.postpaymentdata(this.paymentproduct).subscribe((data:any)=>
    {
      console.log("Data is store in the server");
    });
    this.route.navigate(['/invoicebill']);
  }
}
