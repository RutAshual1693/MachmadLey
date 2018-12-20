import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { CategoriesService } from '../../../services/categories.service';
import { TypesService } from '../../../services/types.service';
@Component({
  selector: 'app-add-parent-category',
  templateUrl: './add-parent-category.component.html',
  styleUrls: ['./add-parent-category.component.css']
})
export class AddParentCategoryComponent implements OnInit {
  dropdownSettings = {};
  constructor(public typesService: TypesService) { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    }
  }

  onSubmit(frm) {
    console.log(frm);
    //this.typesService.a(frm);
  }
}


