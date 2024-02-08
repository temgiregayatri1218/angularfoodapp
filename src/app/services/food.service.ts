import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { foods } from '../service/models/foods';
import { Foodproduct } from '../adminmodule/admin';
import { filter, map } from 'rxjs';
import { Paymentdetails } from '../service/models/paymentdetails';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  
  getallprducts()
  {
    return this.http.get<Foodproduct[]>('http://localhost:3000/productdetails').pipe(map(data=>data.filter(data=>data.available==true)));
  }

  getsearchedproducts(name:string)
  {
    return this.http.get<Foodproduct []>('http://localhost:3000/productdetails').pipe(map(data=>data.filter(data=>data.name.toLowerCase().includes(name))));
  }
  getproductsbycategoery(cat:any)
  {
    return this.http.get<Foodproduct []>(`http://localhost:3000/productdetails`).pipe(map(data=>data.filter(data=>data.name.toLowerCase().includes(cat.toLowerCase()))));
  }

  getproductbyid(id:any)
  {
    console.log("Hello gayatri");
    console.log(id);
    return this.http.get<Foodproduct> (`http://localhost:3000/productdetails/${id}`);
  }

 
}
