import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class StoreSettingService {
  storeSetting;
  constructor(public http: HttpClient) {
    this.StoreSetting();
  }
  getStoreSetting() {
    this.storeSetting().subscribe(
      (data: Array<object>) => {
        this.storeSetting = data[0];
      });
  }
  StoreSetting(): Observable < Array < object >>  {
      return this.http.get<Array<object>>('/getStoreSetting');
  }
  editStoreSetting(storeSetting) {
    storeSetting._id = this.storeSetting._id;
    this.http.post<object[]>("/editStoreSetting", storeSetting).subscribe(
      (data: object[]) => this.storeSetting = data[0]
    )
  }
}
