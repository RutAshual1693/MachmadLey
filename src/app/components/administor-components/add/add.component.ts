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
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(public categoriesService: CategoriesService, public productsService: ProductsService)
  {
    categoriesService.getListCategories().subscribe(
      (data: Array<object>) => {
        this.listCategories = data;
      });
  }
  form;
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  ngOnInit() {
    this.dropdownList = this.categoriesService.listCategories;
    this.selectedItems = [
    
    ];
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
      count: new FormControl(""),
      minCountInOrder: new FormControl(""),
      uniqueNameToLink: new FormControl(""),
      categories: new FormControl(""),
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
