import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  public listTypes: Array<object>;
  constructor(public http: HttpClient) {
    this.types();
  }
  types() {
    this.getListTypes().subscribe(
      (data: Array<object>) => {
        this.listTypes = data;
      });
  }
  getListTypes(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listTypes');
  }
}
