import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { ProductService } from './product.service';
import { Request } from './request';
import { Response } from './response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductsAPI';
  constructor(private authService: AuthserviceService, private productService: ProductService) {}

  authenticateAndFetchProducts(): void {
    const loginRequest: Request = {
      username: 'kminchelle',
      password: '0lelplR'
    };

    this.authService.login(loginRequest)
      .subscribe((authResponse: any) => {
        const token = authResponse.token;
        this.fetchProducts(token);
      }, (error:any) => {
        console.error('Error logging in:', error);
      });
  }

  fetchProducts(token: string): void {
    this.productService.fetchProducts(token)
      .subscribe((productsResponse: any) => {
        console.log(productsResponse);
        // Here you can handle the products data response as needed
      }, (error:any) => {
        console.error('Error fetching products:', error);
      });
  }
}
