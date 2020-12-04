import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  result = {
    saved: false,
    message: {
      display: false,
      text: ""
    }
  }

  newProduct : Product = {} as Product; 
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.reset()
    this.result.message.display = false;
  }

  async addProduct(){
    console.log(this.newProduct);
    await this.productsService.addNewProduct(this.newProduct).subscribe(
      data => {
        console.log(data);
        this.result = {
          saved: true,
          message: {
            text: `Le produit "${this.newProduct.name}" a été ajouté.`,
            display: true,
          }
        };
        this.reset();
      },
      error => {
        console.log(error);
        this.result = {
          saved: false,
          message: {
            text: `Erreur d'ajout du produit "${this.newProduct.name}".`,
            display: true,
          }
        };
      }
    )
  }

  reset(){
    this.newProduct = {
      name: "",
      price: 0,
      quantity: 0
    };
  }

}
