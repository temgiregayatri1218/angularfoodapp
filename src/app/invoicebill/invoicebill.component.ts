import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Paymentdetails } from '../service/models/paymentdetails';

@Component({
  selector: 'app-invoicebill',
  templateUrl: './invoicebill.component.html',
  styleUrls: ['./invoicebill.component.scss']
})
export class InvoicebillComponent implements OnInit {

  constructor(private cartservice:CartService) { }
  paymentdetailsproducts:Paymentdetails[]=[];
  onepaymentdetail:Paymentdetails=new Paymentdetails();
  username='';
  address='';
  number1=0;
  no=0;
  paymentamount=0;
  ngOnInit(): void {
    this.cartservice.getpaymentdata().subscribe((data:Paymentdetails[])=>
    {
      console.log("this data which is required for invoice");
      console.log(data);
        this.paymentdetailsproducts=data;
        this.address=data[0].address;
        this.username=data[0].username;
        console.log("this function works");
        console.log(this.address);
        console.log(this.username);
    });
    this.number1=this.number1+1;
    this.onepaymentdetail=this.paymentdetailsproducts[0];
    console.log("this is one product");
    console.log(this.onepaymentdetail);



    if(this.paymentdetailsproducts[0])
    {
          this.paymentamount=this.paymentdetailsproducts[0].totalpriceofproduct;
    }
  }


  applydiscount()
  {

    let value=this.paymentamount;
    if(this.paymentamount>500)
    {
      
      this.paymentamount=(value*5)/100+this.paymentamount;
    }
    else if(this.paymentamount>10000)
    {
        this.paymentamount=(value*10)/100+this.paymentamount;
    }
    else if(this.paymentamount>2000)
    {
      this.paymentamount=(value*20)/100+this.paymentamount;
    }
    else
    {
      this.paymentamount=this.paymentamount-10;
    }

    console.log("This value is after applying discount : ");
    console.log(this.paymentamount);
  }

}
