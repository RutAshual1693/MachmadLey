import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function () {
      $(".slideanim").each(function () {
        var pos = $("#slide").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $("#slide").addClass("slide");
        }
        else {
          $("#slide").removeClass("slide");
        }
      });
    });
  
  }

}
