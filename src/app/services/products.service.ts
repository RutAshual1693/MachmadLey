import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  public listProducts:Array<object>;
  public listProductOptions: Array<object>;
  constructor(public http: HttpClient) {
    this.getProductOptions();
    this.products();
  }
  
  products() {
    this.getListProducts().subscribe(
      (data: Array<object>) => {
        this.listProducts = data;
      }
    )
  }
  getListProducts(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listProducts');
  }
  getProductOptions(){
     this.http.get<Array<object>>('/listProductOptions').subscribe(
      (data: object[]) => this.listProductOptions = data);
  }
  addProduct(product) {
    this.http.post<object[]>("/addProduct",product).subscribe(
      (data: object[]) => this.listProducts = data
    );
  }
  deleteOption(option) {
   
    this.http.post<object[]>('/deleteOption', option).subscribe(
      (data: object[]) => { this.listProductOptions = data; }
      );

  }
}
