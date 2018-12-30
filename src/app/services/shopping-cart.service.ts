import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { pipe } from '@angular/core/src/render3/pipe';
import { Options } from 'selenium-webdriver/firefox';
import { i18nApply } from '@angular/core/src/render3/i18n';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  autoId: number = 0;
  finalPrice: number = 0;
  finalQuantity: number = 0;
  options = [];
  public shoppingCartList: Array<object> = [];
  constructor(private productsService: ProductsService) { }
  p;
  addProductToCart(product, quantity, options1) {
    this.options = []; var c = true;
    for (var i = 0; i < options1.length; i++) {
      this.options.push(options1[i]);
    }
    if (this.shoppingCartList.find(x => x["_id"] == product["_id"] && x["options"].filter(y => this.options.find(z => z == y) != null).length == options1.length && x["options"].length == this.options.length))
      this.add2(product, quantity);
    else
      this.add1(product, quantity, this.options);
  }
  add1(product, quantity, options) {
    if (((product["quantity"] > quantity) && product["inStock"] == "כמות מוגבלת במלאי") || product["inStock"] == "קיים במלאי") {
      this.shoppingCartList.push({ "id": this.autoId++, "name": product.name, "_id": product._id, "quantity": quantity, "price": product.price, "options": options });
      this.finalPrice = this.finalPrice + product.price * quantity;
      this.finalQuantity += quantity;
    }
  }
  add2(p, quantity) {
    var product = this.productsService.listProducts.find(x => x["_id"] == p["_id"]);
    var pIC = this.shoppingCartList.find(x => x["_id"] == p["_id"] && x["options"].filter(y => this.options.find(z => z == y) != null).length == this.options.length);
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
