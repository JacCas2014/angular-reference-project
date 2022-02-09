import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Shipping } from './shipping';

/*
In Angular, a service is an instance of a class that you can make available to any part of your application 
using Angular's dependency injection system.
*/
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // defines a property items, of type an array of Product and instantiates to an empty array
  items: Product[] = [];

  // take a product parameter of type Product
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  /**
   * Using http client to get from /assets/shipping.json an array of objects that have type string and price number in object
   */
  getShippingPrices() {
    /**
     * Also valid: return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
     */
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }

  constructor(private http: HttpClient) { }
}
