import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[] = [];
  cartvalue:number = 0;

  constructor() { }

  addToCart(product: Product){
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.updateCartValue();

  }
  removeFromCart(productId: number){
    const index = this.cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.updateCartValue();
    }

  }
  editFromCart(productId: number , quantity: number){
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.updateCartValue();
    }

  }
  private updateCartValue(): void {
    this.cartvalue = this.cart.reduce((total, item) => total + item.quantity, 0);
  }
  // CartService
getProductCount(productId: number): number {
  const item = this.cart.find(item => item.id === productId);
  return item ? item.quantity : 0;
}

}
