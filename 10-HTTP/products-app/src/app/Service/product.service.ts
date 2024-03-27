import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  createProduct(data: any) {
    const headers = new HttpHeaders({ 'my-header': 'hello-world' });
    this.http
      .post('http://localhost:8080/products', data, {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
        this.products.push(
          new Product(
            data['productId'],
            data['productName'],
            data['productDesc']
          )
        );
      });
  }

  getAllProduct() {
    this.http.get('http://localhost:8080/products').subscribe((data) => {
      console.log(data);
      for (const index in data) {
        this.products.push(
          new Product(
            data[index]['productId'],
            data[index]['productName'],
            data[index]['productDesc']
          )
        );
      }
    });
  }

  deleteProduct(id) {
    this.http.delete('http://localhost:8080/products/' + id).subscribe();
  }
}
