import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public http: HttpClient) { }

  charge(stripeToken): Observable<object> {
    return this.http.post<object>('/charge', { 'stripeToken': stripeToken })
  }
}
