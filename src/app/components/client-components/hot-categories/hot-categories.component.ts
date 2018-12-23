import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hot-categories',
  templateUrl: './hot-categories.component.html',
  styleUrls: ['./hot-categories.component.css']
})
export class HotCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function () {
      $("#slide1").each(function () {
        var pos = $("#slide1").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $("#slide1").addClass("slide");
        }
        else {
          $("#slide1").removeClass("slide");
        }
      });
    });
  }

}
