import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  cartvalue: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartvalue = this.cartService.cartvalue;
  }

  removeFromCart(id: any) {
    this.cartService.removeFromCart(id);
    this.updateCartValue();
  }

  editCart(productId: any, quantity: any): void {
    this.cartService.editFromCart(productId, quantity);
    this.updateCartValue();
  }

  private updateCartValue(): void {
    this.cartvalue = this.cartService.cartvalue;
  }
}