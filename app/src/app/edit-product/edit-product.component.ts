import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() selectedProduct = {} as Product;
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  result = {
    saved: false,
    message: {
      display: false,
      text: ""
    }
  }
  
  async updateProduct(){
    console.log(this.selectedProduct);
    await this.productsService.addNewProduct(this.selectedProduct).subscribe(
      data => {
        console.log(data);
        this.result = {
          saved: true,
          message: {
            text: `Le produit "${this.selectedProduct.name}" est à jour.`,
            display: true,
          }
        };
      },
      error => {
        console.log(error);
        this.result = {
          saved: false,
          message: {
            text: `Erreur d'ajout du produit "${this.selectedProduct.name}".`,
            display: true,
          }
        };
      }
    )
  }


  async deleteProduct(){
    console.log(this.selectedProduct);
    await this.productsService.deleteProduct(this.selectedProduct.id).subscribe(
      data => {
        console.log(data);
        this.result = {
          saved: true,
          message: {
            text: `Le produit "${this.selectedProduct.name}" a été supprimé.`,
            display: true,
          }
        };
      },
      error => {
        console.log(error);
        this.result = {
          saved: false,
          message: {
            text: `Erreur de supression du produit "${this.selectedProduct.name}".`,
            display: true,
          }
        };
      }
    )
  }

}
