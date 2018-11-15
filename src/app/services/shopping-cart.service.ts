import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { pipe } from '@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  autoId: number = 0;
  finalPrice: number = 0;
  finalQuantity: number = 0;
  public shoppingCartList: Array<object> = [];
  constructor(private productsService: ProductsService) { }
  p;
  addProductToCart(product,quantity) {
    if (product["inStock"] == true) {
      this.add(product, this.shoppingCartList.find(x => x["_id"] == product["_id"]),quantity);
    }
    if (product["inStock"] == undefined)
      this.add(this.productsService.listProducts.find(x => x["_id"] == product._id), product,quantity)
  }
  add(product, pIC,quantity) {
    if (pIC != null) {
      if (product["quantity"] > pIC["quantity"] + quantity) {
        this.finalQuantity += quantity;
        pIC["quantity"] += quantity;
        this.finalPrice += pIC.price * quantity;
       
      }
    }
    else {
      this.shoppingCartList.push({ "id": this.autoId++, "name": product.name, "_id": product._id, "quantity": 1, "price": product.price });
      this.finalPrice += product.price;
      this.finalQuantity += quantity;
    }
  }
  removeProductFromCart(product, index, quantity) {
    this.finalQuantity += quantity;
    product.quantity += quantity;
    this.finalPrice += product.price * quantity;
  
    if (product.quantity == 0)
      this.shoppingCartList.splice(index, 1);

  }
  }
