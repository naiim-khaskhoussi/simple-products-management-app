import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products : Product[];
  selectedProduct: Product = {} as Product;

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

  selectProduct(product) {
    this.selectProduct = product;
  }

}
