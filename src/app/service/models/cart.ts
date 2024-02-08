import { CartItem } from "./carditem";

export class Cart{
    item:CartItem[]=[];


    get totalprice():number{
       let totalPrice =0 ;
       this.item.forEach(element => {

        totalPrice+=element.price;
       });
       return totalPrice;
    }
}