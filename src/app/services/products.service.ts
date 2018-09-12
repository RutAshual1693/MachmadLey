import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  public listProducts:Array<object>;
  public listProductOptions: Array<object>;
  public editProductOption: object;
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
  deleteValue() {
    var o = { "_id": this.editProductOption["_id"], "values": this.editProductOption["values"] };
    this.http.post<object[]>('/deleteValue', o).subscribe(
      (data: object[]) => { this.listProducts = data; }
    );
  }
  deleteProduct(_id) {
    var a = { _id: _id };
    this.http.post<object[]>('/deleteProduct',a).subscribe(
      (data: object[]) => { this.listProducts = data; }
    );
  }
}
