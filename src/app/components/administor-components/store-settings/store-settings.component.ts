import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-store-settings',
  templateUrl: './store-settings.component.html',
  styleUrls: ['./store-settings.component.css']
})
export class StoreSettingsComponent implements OnInit {

  constructor() { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      nameStore: new FormControl("", Validators.required),
      nameAdmin: new FormControl("", Validators.required),
      adress: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      inStock: new FormControl("", Validators.required),
      geographicCode: new FormControl("", Validators.required),
      numberPhone: new FormControl("", Validators.required),
      fax: new FormControl("", Validators.required),
      
    });
  }

}
