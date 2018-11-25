import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TypesService } from '../../../services/types.service';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  dropdownSettings;
  product: object;
  constructor(private productsService: ProductsService, private typesService: TypesService, private categoriesService: CategoriesService) {
    this.product = productsService.editProduct;
  }
  form; 
  ngOnInit()
  {
    this.form = new FormGroup({
      name: new FormControl(""),
      model: new FormControl(""),
      price: new FormControl(""),
      quantity: new FormControl(""),
      inStock: new FormControl(true),
      minQuantityInOrder: new FormControl(""),
      uniqueNameToLink: new FormControl(""),
      categories: new FormControl(""),
      prodDescription: new FormControl(""),
      company: new FormControl(""),
      typeAnimal: new FormControl(""),
      options: new FormControl(""),
      relatedProducts: new FormControl(""),
      //img: new FormControl(""),
    });
    this.form.setValue({
      name: this.productsService.editProduct["name"],
      model: this.productsService.editProduct["model"],
      price: this.productsService.editProduct["price"],
      quantity: this.productsService.editProduct["quantity"],
      inStock: this.productsService.editProduct["inStock"],
      minQuantityInOrder: this.productsService.editProduct["minQuantityInOrder"],
      uniqueNameToLink: this.productsService.editProduct["uniqueNameToLink"],
      categories: this.productsService.editProduct["categories"],
      prodDescription: this.productsService.editProduct["prodDescription"],
      company: this.productsService.editProduct["company"],
      typeAnimal: this.productsService.editProduct["typeAnimal"],
      options: this.productsService.editProduct["options"],
      relatedProducts: null,
      //img: this.productsService.editProduct["img"]
    });
  this.dropdownSettings = {
  singleSelection: false,
  idField: '_id',
  textField: 'name',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 4,
  allowSearchFilter: true
};

  }
  onSubmit(frm) {
    console.log(frm);
    frm.typeAnimal = this.typesService.listTypes.filter(x => frm.categories.find(y => this.categoriesService.listCategories.find(i => i["_id"] == y["_id"])["types"] == x["_id"]) != null);
    if (frm.inStock == "קיים במלאי")
      frm.inStock = true;
    else
      frm.inStock = false;
    this.productsService.saveProductEditing(frm);
  }

}
