import { Component, OnInit } from '@angular/core';
import { TypesService } from './../../../services/types.service';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';
import { PaginationService } from '../../../services/pagination.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(private typesService: TypesService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private paginationService: PaginationService)
  {
  }
  chooseCategory(typeId, category) {
    this.productsService.homePage = false;
    this.productsService.listProductByCategory = this.productsService.listProducts
      .filter(x => x["categories"]
        .find(y => (y["_id"]) == category._id) != null && x["typeAnimal"]
          .find(y1 => y1["_id"] == typeId) != null);
    this.paginationService.setPage(1);;
  }
  ngOnInit() {
    
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0px 10px";
        document.getElementById("logo").style.fontSize = "25px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.46)";
      } else {
        document.getElementById("navbar").style.padding = "5px 10px";
        document.getElementById("logo").style.fontSize = "35px";
        document.getElementById("navbar").style.backgroundColor = "transparent";

      }
    }

  }

}

