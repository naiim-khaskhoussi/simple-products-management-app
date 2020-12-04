import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product'
import { ProductSearchCriteria } from '../interfaces/search-criteria';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  displayAddNewProduct = false;
  displayProductList = false;
  searchCriteria : ProductSearchCriteria = {} as ProductSearchCriteria;
  products: Product[];
  selectedProduct = null;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.searchCriteria = {
      name: "",
      minprice: 0.00,
      maxprice: 999999.9,
      quantity: null
    };
  }

  showNewProductSection(){
    this.displayProductList = false;
    this.displayAddNewProduct = true;
  }

  showProductListSection(){
    this.displayAddNewProduct = false;
    this.displayProductList = true;
  }

  async searchProducts(){
    console.log(this.searchCriteria);
    // find demands by criteria
    await this.productsService.getProductByCriteria(this.searchCriteria).subscribe(
      response => {
        this.products = response;
        //this.searchChildEvent.emit(this.demands);
        //this.errorMessage = "";
        //this.searchResult = "(Recherche)";
      },
      error => { console.log(error) }
    );
   this.showProductListSection();
  }

}
