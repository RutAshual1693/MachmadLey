import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ProductsService } from '../../../services/products.service';
import { TypesService } from '../../../services/types.service';
//import { Validators } from '@angular/forms/src/validators';
declare var $: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public listCategories: Array<object>;
  dropdownSettings = {};
  constructor(public categoriesService: CategoriesService, public productsService: ProductsService, public typesService: TypesService)
  {
    categoriesService.getListCategories().subscribe(
      (data: Array<object>) => {
        this.listCategories = data;
      });   }
  //}  readURL(input) {
  //    if (input.files && input.files[0]) {
  //      var reader = new FileReader();

  //      reader.onload = function (e) {
  //        $('#blah')
  //          .attr('src', e.target["result"]);
  //      };

  //      reader.readAsDataURL(input.files[0]);
  //    }
 
  form;
  ngOnInit() {
   
    //$("#input-file-1").fileinput({
    //  uploadUrl: "./assets/pictures",
    //  autoOrientImage: true
    //});
    //$("#toggleOrient").on('change', function () {
    //  var val = $(this).prop('checked');
    //  $("#input-file-1").fileinput('refresh', {
    //    uploadUrl: "./assets/pictures",
    //    autoOrientImage: val
    //  });
    //  $('#togStatus').html('Fileinput is reset and <samp>autoOrientImage</samp> is set to <em>' + (val ? 'true' : 'false') + '</em>. Retry by selecting images again.');
    //});
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      model: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required),
      inStock: new FormControl("", Validators.required),
      minQuantityInOrder: new FormControl("", Validators.required),
      uniqueNameToLink: new FormControl("", Validators.required),
      categories: new FormControl("", Validators.required),
      prodDescription: new FormControl("", Validators.required), 
      company: new FormControl("", Validators.required), 
      typeAnimal: new FormControl("") ,
      options: new FormControl("", Validators.required),
      relatedProducts: new FormControl(""),
      img: new FormControl(""),
    });
  
  }

  onSubmit(frm) {
    console.log(frm);
    frm.typeAnimal = this.typesService.listTypes.filter(x => frm.categories.find(y => this.categoriesService.listCategories.find(i=>i["_id"]==y["_id"])["types"] == x["_id"]) != null);
    //if (frm.inStock == "קיים במלאי")
    //  frm.inStock = true;
    //else
    //  frm.inStock = false;
    this.productsService.addProduct(frm);
  }
  saveProducts() {
    

  }
}
