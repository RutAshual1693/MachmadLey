import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private customersService: CustomersService) { }
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
   
    if (frm.password == frm.confirmPassword)
      if (this.customersService.listCustomers.find(x => x["password"] == frm.password && x["firstName"] == frm.firstName) == undefined) {
          frm.registrationDate = new Date().toString();
              this.customersService.addCustomer(frm); console.log(frm);
      }

  }
}
