import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  autoId: number = 0;
  finalPrice: number = 0;
  public shoppingCartList: Array<object> = [];
  constructor(private productsService: ProductsService) { }
  p;
  addProductToCart(product) {
    if (product["inStock"] == true) {
      this.add(product, this.shoppingCartList.find(x => x["_id"] == product["_id"]));
    }
    if (product["inStock"] == undefined)
      this.add(this.productsService.listProducts.find(x => x["_id"] == product._id), product)
  }
  add(product, pIC) {
    if (pIC != null) {
      if (product["quantity"] > pIC["quantity"]) {
        pIC["quantity"]++;
        this.finalPrice += pIC.price;
      }
    }
    else {
      this.shoppingCartList.push({ "id": this.autoId++, "name": product.name, "_id": product._id, "quantity": 1, "price": product.price });
      this.finalPrice += product.price;
    }
  }
  removeProductFromCart(product,index) {
    product.quantity--;
    this.finalPrice -= product.price;
    if (product.quantity == 0)
      this.shoppingCartList.splice(index, 1);

  }
  }
