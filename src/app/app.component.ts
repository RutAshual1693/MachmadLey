import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  g: string = "<h1 style='color:red;'>jj<h1/>";
  ngOnInit() {
  }
}
