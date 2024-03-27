import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      productName: new FormControl(null, [Validators.required]),
      productDesc: new FormControl(null, [Validators.required]),
    });
  }

  OnFormSubmitted() {
    console.log(this.reactiveForm.value);

    this.productService.createProduct(this.reactiveForm.value);

    this.reactiveForm.reset({
      pName: null,
      pDesc: null,
    });

    console.log(this.reactiveForm.value);
  }
}
