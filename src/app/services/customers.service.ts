import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { arrayExpression } from 'babel-types';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public editCustomer: object;
  public listCustomers: Array<object>;
  constructor(public http: HttpClient) {
    this.customers();
  }
  customers() {
    this.getListCustomers().subscribe(
      (data: Array<object>) => {
        this.listCustomers = data;
      });
  }
  getListCustomers(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listCustomers');
  }
  delete(_id) {
    var o = { _id: _id };
    this.http.post<object[]>('/deleteCustomer', o).subscribe(
      (data: object[]) => { this.listCustomers = data; }
    );
  }
  addCustomer(customer) {
    this.http.post<object[]>("/addCustomer", customer).subscribe(
      (data: object[]) => this.listCustomers = data
    );
  }
  edit(frm) {
    this.http.post<object[]>("/editCustomers", this.editCustomer).subscribe(
      (data: object[]) => this.listCustomers = data
    );
  }
}
