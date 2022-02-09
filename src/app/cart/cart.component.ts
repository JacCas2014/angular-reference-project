import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  /**
   * To use the cart service you have to inject it into the constructor.
   * cartService of type CartService is then useable within this component.
   */
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
