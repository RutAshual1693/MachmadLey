import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { FormGroup, FormControl } from '@angular/forms'
import { ProductsService } from '../../../services/products.service';
import { TypesService } from '../../../services/types.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public listCategories: Array<object>;
  dropdownSettings = {};
  constructor(public categoriesService: CategoriesService, public productsService: ProductsService, public typesService: TypesService)
  {
    categoriesService.getListCategories().subscribe(
      (data: Array<object>) => {
        this.listCategories = data;
      });
  }
  form;
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
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
      typeAnimal : new FormControl("") ,
      options: new FormControl(""),
    });
}
  onSubmit(frm) {
    console.log(frm);
    frm.typeAnimal = this.typesService.listTypes.filter(x => frm.categories.find(y => this.categoriesService.listCategories.find(i=>i["_id"]==y["_id"])["types"] == x["_id"]) != null);
    this.productsService.addProduct(frm);
  }
  saveProducts() {
    

  }
}
