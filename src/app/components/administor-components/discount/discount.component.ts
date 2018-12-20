import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  dropdownSettings; form;
  constructor(private productsService: ProductsService, private categoriesService: CategoriesService)
  {

  }
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
  nameSale: new FormControl("", Validators.required),
  kindDiscount: new FormControl("", Validators.required),
  countDiscount: new FormControl(""),
  selectedProducts: new FormControl(""),
  fromPrice: new FormControl("", Validators.required),
  selectedCategories: new FormControl(""),
  countProdOnCart: new FormControl("", Validators.required),
  categories: new FormControl("", Validators.required),
  prodDescription: new FormControl("", Validators.required),
  countProdCustomGet: new FormControl(""),
});
}
onSubmit(frm) {
  console.log(frm);
}
  clicked(d) {
    var f = d;

  }

}
