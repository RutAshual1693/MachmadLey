import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { CategoriesService } from '../../../services/categories.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(public categoriesService: CategoriesService) { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
    });
  }
  onSubmit(frm) {
    console.log(frm);
    this.categoriesService.addCategory(frm);
  }
}
