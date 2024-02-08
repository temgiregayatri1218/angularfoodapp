import { cartfooditem } from "./carditem";

export class Paymentdetails
{
    id!:number;
    arrayofproduct!:cartfooditem[];
    quantityofproduct!:number;
    totalpriceofproduct!:number;
    username!:string;
    useradd!:string;
    address!:string;
}