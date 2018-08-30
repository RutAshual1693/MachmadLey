import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(public categoriesService: CategoriesService) {

  }

  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.categoriesService.editCategory["name"]),
    });
  }
  onSubmit(frm) {
    console.log(frm);   
   // this.categoriesService.editCategory(frm);
  }

}
