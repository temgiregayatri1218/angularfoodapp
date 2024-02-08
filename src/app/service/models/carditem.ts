import { foods } from "./foods";

export class CartItem
{
    static quantity: number;
    constructor(food:foods)
    {
        this.food=food;
        this.price;
    }
    food:foods;
    quantity:number=1;
    get price():number
    {
        this.food.price=this.food.price*this.quantity;
        return this.food.price;
    }
}

export class cartfooditem{
    id!:number;
    nameoffood!:string;
    nameofuser!:string;
    username!:string;
    mobile!:string;
    password!:string;
    price!:number;
    imageurl!:string;
    address!:string;
    quantity!:number;
}