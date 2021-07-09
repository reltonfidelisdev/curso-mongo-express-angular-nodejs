import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:4000/api/products/';

  constructor(private http: HttpClient) { }

  insertProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editProduct(id: string, product: Product): Observable<any> {
    return this.http.put(this.url + id, product);
  }

  deletProduct(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
