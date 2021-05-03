import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotions } from './promotions';



@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/promotions";

  getPromotions() : Observable<Promotions[]>  {
  	return this._httpClient.get<Promotions[]>(this.url);
  }
}

