import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';
import { TypesService } from '../../../services/types.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public categoriesService: CategoriesService, public productsServce: ProductsService, public typesService: TypesService)
  {
    
  }

  ngOnInit() {
  }
  delete(category) {
   //var list;
   // //this.categoriesService.delete(category);
   // if (this.productsServce.listProducts.length!=0)
   // {
   // for (var i = 0; i < this.productsServce.listProducts.length; i++) {
   //   var c = this.productsServce.listProducts[i]["categories"];
   //   if (c.find(x => x._id == category._id) != null) {
   //     if (c.length > 1) {
   //       for (var j = 0; j < c.length; j++)
   //         if (c[j]["_id"] == category._id)
   //           break;
   //       c.splice(j, 1);
   //       this.productsServce.deleteCategoryFromProduct(this.productsServce.listProducts[i]["_id"], c);
   //     }
   //     else
   //       list.push(this.productsServce.listProducts[i]["_id"]);     
   //   }
   //   }
   //   if (list != null) {
   //   for (var i = 0; i < list.length;i++)
   //     this.productsServce.deleteProduct(list[i]);
   // }
   // }
   
    this.categoriesService.delete(category);
  }
  editCategoryClicked(category) {
    this.categoriesService.editCategory = category;
  }
  //addCategory() {
  //  this.categoriesService.add();

  //}
}
