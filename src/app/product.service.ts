// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from './product';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com/products';
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    const data  =  this.http.get<Product[]>(this.baseUrl);
    // .pipe(
    // //   tap((response: Product[]) => {
    // //     console.log("Tap"+response.forEach(res => { res.id}));
    // //     response.forEach( product => {
    // //       console.log(product.id);
    // //     })
    // //   })
    // );
    console.log("API data"+data);
    return data;
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/search?q=${query}`);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/category/${category}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/add`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  fetchProducts(token: string): Observable<Product[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Product[]>(this.baseUrl, { headers });
  }
}
