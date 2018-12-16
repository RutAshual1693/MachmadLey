import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
declare var $: any;
@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['./hot-product.component.css']
})
export class HotProductComponent implements OnInit {
arr = ['AKC51 קולר לד M.JPG', 'AKC51 קולר לד M.JPG', 'AKC4600 מיטת אביב מלבנית.JPG', 'AKC6338 מיטה מלבנית משובצת.JPG'];

  constructor(private shoppingCartService: ShoppingCartService) { }
  id;
  clicked(i: number) {
    this.id = "addToCart" + i;
  }
  ngOnInit() {
    $(window).scroll(function () {
      $(".slideanim").each(function () {
        var pos = $("#slide3").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $("#slide3").addClass("slide");
        }
        else {
          $("#slide3").removeClass("slide");
        }
      });
    });
  }

}
