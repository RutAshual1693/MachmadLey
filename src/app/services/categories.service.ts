import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { arrayExpression } from 'babel-types';

@Injectable()
export class CategoriesService {
  public editCategory: object = { name: "sdd" };
  public listCategories: Array<object>;
  constructor(public http: HttpClient) {
    this.categories();
  }
  categories() {
  this.getListCategories().subscribe(
      (data: Array<object>) => {
        this.listCategories = data;
      });
  }
  getListCategories(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listCategories');
  }
  delete(category) {
    this.http.post<object[]>('/deleteCategories', category).subscribe(
      (data: object[]) => { this.listCategories = data;  }
    );
  }
  addCategory(category) {
    this.http.post<object[]>("/addCategory", category).subscribe(
      (data: object[]) => this.listCategories = data
    );
  }
}
