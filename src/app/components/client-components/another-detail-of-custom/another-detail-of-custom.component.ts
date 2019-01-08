import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Console } from '@angular/core/src/console';
import { Validators } from '@angular/forms';
import { OrdersService } from '../../../services/orders.service';
@Component({
  selector: 'app-another-detail-of-custom',
  templateUrl: './another-detail-of-custom.component.html',
  styleUrls: ['./another-detail-of-custom.component.css']
})
export class AnotherDetailOfCustomComponent implements OnInit
{
  constructor(private ordersService: OrdersService) { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      mail: new FormControl("", [Validators.required, Validators.email]),
      numberPhone: new FormControl("",Validators.required),
      adress:new FormGroup({
        street: new FormControl("",Validators.required),
        city: new FormControl("", Validators.required),
        numHouse: new FormControl("", Validators.required),
        postalCode: new FormControl("", Validators.required),
       
      })
    })
    //var user = JSON.parse(sessionStorage.getItem("user"));
    //this.form.setValue({ firstName: user['firstName'], lastName: user['lastName'], mail: user['mail'], numberPhone: user['numberPhone'], adress: { street: user['adress']["street"], city: user['adress']["city"], numHouse: user['adress']["numHouse"], postalCode: user['adress']["postalCode"] } });
}
  onSubmit(frm) {
    var order = { customerDetails: frm, products: JSON.parse(sessionStorage.getItem("cart")), finalPrice: JSON.parse(sessionStorage.getItem("finalPrice")), orderDate: new Date()}
    console.log(order);
    this.ordersService.addOrders(order);
  }
}
