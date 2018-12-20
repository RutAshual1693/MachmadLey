import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { PaginationService } from '../../../services/pagination.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ProductOptionsComponent } from '../../../components/administor-components/product-options/product-options.component';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  arr = ["AKC6338 מיטה מלבנית משובצת.JPG", "AKC4600 מיטת אביב מלבנית.JPG", "AKC1500 מיטה אורטופדית דוגמת מעוין.JPG", "AKC3115 מיטת 80 מרובעת3.JPG", "מיטת-זמש-אורטופדית-250x150.jpg", "AKC3462 מיטה פסים עגולה2.JPG", "מיטת-זמש-אורטופדית-250x150.jpg", "מיטת-זמש-אורטופדית-250x150.jpg"]

  constructor(private productsService: ProductsService,
    private paginationService: PaginationService,
    private shoppingCartService: ShoppingCartService
  ) { }




  ngOnInit() {
    // get dummy data  
    // set items to json response
    // initialize to page 1
    this.paginationService.setPage(1);
  }
  productDetails(product)
  {
    this.productsService.showProductDetails = product;
    this.productsService.showProductOptions = this.productsService.listProductOptions.filter(x =>product.options.find(y=>y._id==x["_id"])!=null);
  }
}
