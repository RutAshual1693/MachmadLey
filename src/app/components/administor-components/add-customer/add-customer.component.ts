import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../../../services/customers.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(public customersService: CustomersService) { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      registrationDate: new FormControl(""),
      mail: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
    });
  }
  onSubmit(frm) {
    console.log(frm);
    frm.registrationDate = new Date().toString();
    this.customersService.addCustomer(frm);
  }

}
