import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from '../models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  coffeeUrl:string="https://api.sampleapis.com/coffee/hot"
  constructor( private http: HttpClient) { }

  getCoffees(){
    return this.http.get(this.coffeeUrl)
    
  }

  getSimpleCoffee(id:number){
    return this.http.get(`${this.coffeeUrl}/${id}`)
    
  }
}
