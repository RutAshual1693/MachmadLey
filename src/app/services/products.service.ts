import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  public listProducts:Array<object>;
  constructor(public http: HttpClient) {

  }
  getListProducts(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listProducts');
  }

  addProduct(product) {
    this.http.post<object[]>("/addProduct",product).subscribe(
      (data: object[]) => this.listProducts = data
    );
  }
}
