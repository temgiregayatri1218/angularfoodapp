import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foodproduct } from '../adminmodule/admin';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  postproductdata(data:Foodproduct)
  {
      return this.http.post('http://localhost:3000/productdetails',data);
  }

  getproductdata()
  {
    return this.http.get<Foodproduct[]>('http://localhost:3000/productdetails');
  }
  deleteproduct(id:any)
  {
    return this.http.delete(`http://localhost:3000/productdetails/${id}`);
  }

  updatefoodproduct(id:any,food:Foodproduct)
  {
    return this.http.put(`http://localhost:3000/productdetails/${id}`,food);
  }


}
