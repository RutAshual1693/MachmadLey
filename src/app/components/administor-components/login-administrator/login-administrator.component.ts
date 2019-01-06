
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomersService } from '../../../services/customers.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.css']
})
export class LoginAdministratorComponent implements OnInit {
  amdinistratorDetails = {};
  constructor(private customersService: CustomersService, private http: HttpClient) {
    this.administrator();
  }
  administrator() {
    this.getAdministrator().subscribe(
      (data: Array<object>) => {
        this.amdinistratorDetails = data[0];
      });
  }
  getAdministrator(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/administrator');
  }

  form;
  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit(frm) {
    //$('#frm').validator();
    console.log(frm);
    //frm.registrationDate = new Date().toString();
   
    if (this.administrator["mail"] == frm.email && this.administrator["password"] == frm.password)
    {
      sessionStorage.setItem('loginAdministrator', JSON.stringify(frm));
    }
    else
      sessionStorage.setItem('loginAdministrator', JSON.stringify(''));

  }

}
