import { Injectable } from '@angular/core';
import { Cart } from '../service/models/cart';
import { foods } from '../service/models/foods';
import { CartItem, cartfooditem } from '../service/models/carditem';
import { HttpClient } from '@angular/common/http';
import { Paymentdetails } from '../service/models/paymentdetails';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient)
  {

  }
  private cart:Cart=new Cart();
  addtocart(food:foods)
  {
    
    let CartItem1=this.cart.item.find(item=>item.food.id===food.id);
    if(CartItem1)
    {
      this.changeQuantity(food.id,CartItem1.quantity+1);
      return;
    }
    this.cart.item.push(new CartItem(food));
  }


  removeFromCart(foodId:number)
  {
    this.cart.item=this.cart.item.filter(item=>item.food.id!=foodId);
  }

  changeQuantity(quantity:number, foodId:number)
  {
    let CartItem1=this.cart.item.find(item=>item.food.id===foodId);
    if(!CartItem1)
    {
      CartItem.quantity=quantity;
    }
  }

  postcartfooditem(food:cartfooditem)
  {
    return this.http.post('http://localhost:3000/cartitem',food);
  }

  getfooddata()
  {
    let user=localStorage.getItem('user');
    let username='';
    let userpassword='';
    if(user)
    {
      let userdata=JSON.parse(user);
      username=userdata.username;
      userpassword=userdata.password;
    }
    return this.http.get<cartfooditem []>(`http://localhost:3000/cartitem?username=${username}&password=${userpassword}`)
  }

  removeproductfromcart(id:any)
  {
    return this.http.delete(`http://localhost:3000/cartitem/${id}`);
  }

  getpaymentdataofid(data:Paymentdetails, id:any)
  {
      return this.http.get(`http://localhost:3000/productpaymentdetails/${id}`);
  }

  postpaymentdata(data:Paymentdetails)
  {
      return this.http.post('http://localhost:3000/productpaymentdetails',data);
  }
  getpaymentdata()
  {
    return this.http.get<Paymentdetails []>('http://localhost:3000/productpaymentdetails');
  }




}
