import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class SalesService {
  public listSale: Array<object>;
  public onSale;
  constructor(public http: HttpClient) {
    this.sales();
  }
  sales() {
    this.getListSales().subscribe(
      (data: Array<object>) => {
        this.listSale = data;
      }
    )
  }
  getListSales(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listSales');
  }
  addSale(sale) {
    this.http.post<object>("/addSale", sale).subscribe(
      (data: object[]) => this.listSale = data
    )
  }
}
