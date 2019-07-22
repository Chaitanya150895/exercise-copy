import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  customer = {
    name: '',
    email: '',
    password: '',
    address: '',
    checkbox: '',
    shipping_value: ''
  }

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }



  getTotalPrice() {
    var totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  }


  // getFinalPrice() {
  //   var tax = 12.5;
  //   var finalPrice = 0;
  //   finalPrice = this.getTotalPrice + this.getTax;
  //   return finalPrice;
    
  // }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}