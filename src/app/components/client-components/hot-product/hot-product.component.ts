import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
declare var $: any;
@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['./hot-product.component.css']
})
export class HotProductComponent implements OnInit {
  arr = ['מזרן AKC810.gif', 'AKC7002 איגלו קטן.JPG', 'מזרן פוך פרוותי2.gif', 'מיטה 6370.gif', 'מיטה ויסקו חימום עצמי חום.jpg','מיטת-זמש-אורטופדית-250x150.jpg'];
  arr2=[];
  constructor(private shoppingCartService: ShoppingCartService) { }
  id;
  clicked(i: number) {
    this.id = "addToCart" + i;
  }
  ngOnInit() {
    for (let i = 0; i < this.arr.length; i++)
      this.arr2[i] = this.arr[i].slice(0, this.arr[i].length - 4);
    $(window).scroll(function () {
      $(".slideanim").each(function () {
        var pos = $(".slideanim").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(".slideanim").addClass("slide");
        }
        else {
          $(".slideanim").removeClass("slide");
        }
      });
    });
  }

}
