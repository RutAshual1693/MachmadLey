import { Component, OnInit } from '@angular/core';
import { TypesService } from './../../../services/types.service';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(public typesService: TypesService, public categoriesService: CategoriesService)
  {

  }
  
  ngOnInit() {
    
  }

}
