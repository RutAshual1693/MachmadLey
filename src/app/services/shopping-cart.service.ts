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
  addProductToCart(product, quantity) {
    if (this.shoppingCartList.find(x => x["_id"] == product["_id"]))
      this.add2(product, quantity);
    else
      this.add1(product, quantity);
  }
  add1(product, quantity) {
    if (((product["quantity"] > quantity) && product["inStock"] == "כמות מוגבלת במלאי") || product["inStock"] == "קיים במלאי") {
      this.shoppingCartList.push({ "id": this.autoId++, "name": product.name, "_id": product._id, "quantity": quantity, "price": product.price });
      this.finalPrice = this.finalPrice + product.price * quantity;
      this.finalQuantity += quantity;
    }
  }
  add2(p, quantity) {
    var product = this.productsService.listProducts.find(x => x["_id"] == p["_id"]);
    var pIC = this.shoppingCartList.find(x => x["_id"] == p["_id"]);
    if (((product["quantity"] > pIC["quantity"] + quantity) && product["inStock"] == "כמות מוגבלת במלאי") || product["inStock"] == "קיים במלאי") {
      this.finalQuantity += quantity;
      pIC["quantity"] += quantity;
      this.finalPrice += pIC["price"] * quantity;
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
