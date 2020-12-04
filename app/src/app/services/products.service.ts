import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { ProductSearchCriteria } from '../interfaces/search-criteria';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  addNewProduct (product: Product) {
    return this.http.post<Product>(this.API_URL, product);
  }

  deleteProduct(productId) {
    return this.http.delete<Object>(this.API_URL + '?id=' + productId);
  } 

  getProductByCriteria(productCriteria: ProductSearchCriteria){
    let query = `?name=${productCriteria.name}&minPrice=${productCriteria.minprice}&maxPrice=${productCriteria.maxprice}`;
    return this.http.get<Product[]>(this.API_URL + query);
  }

}
