import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { FormGroup, FormControl } from '@angular/forms'
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public listCategories: Array<object>;
  constructor(public categoriesService: CategoriesService, public productsService: ProductsService)
  {
    categoriesService.getListCategories().subscribe(
      (data: Array<object>) => {
        this.listCategories = data;
      });
  }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
      model: new FormControl(""),
      price: new FormControl(""),
      count: new FormControl(""),
      minCountInOrder: new FormControl(""),
      uniqueNameToLink: new FormControl(""),
      categories: new FormControl([""]),
      prodDescription: new FormControl(""), 
      company: new FormControl(""), 
      typeAnimal : new FormControl("") 
    });
  }
  onSubmit(frm) {
    console.log(frm);
    this.productsService.addProduct(frm);
  }
  saveProducts() {
    

  }
}
