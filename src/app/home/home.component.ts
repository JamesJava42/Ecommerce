// Home Component TypeScript file
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        console.log("Products response from the API call", response.products);
        this.products = response.products;
      },
      (error: any) => {
        console.error("Error fetching products:", error);
      }
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  getProductCount(productId: number): number {
    return this.cartService.getProductCount(productId);
  }
}
