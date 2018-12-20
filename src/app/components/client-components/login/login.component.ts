import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customersService: CustomersService) { }

  form;
  ngOnInit() {
  
  }
  onSubmit(frm) {
    console.log(frm);
    frm.registrationDate = new Date().toString();
    this.customersService.checkCustomer(frm);
  }

}
