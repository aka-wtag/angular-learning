import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct();
    this.products = this.productService.products;
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }
}
