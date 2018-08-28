import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public categoriesService: CategoriesService)
  {
    
  }

  ngOnInit() {
  }
  delete(category) {
    this.categoriesService.delete(category);
  }
  editCategoryClicked(category) {
    this.categoriesService.editCategory = category;
  }
  //addCategory() {
  //  this.categoriesService.add();

  //}
}
