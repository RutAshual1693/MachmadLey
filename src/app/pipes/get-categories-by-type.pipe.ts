import { Pipe, PipeTransform } from '@angular/core';
import { CategoriesService } from './../services/categories.service';
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
  name: 'getCategoriesByType'
})
export class GetCategoriesByTypePipe implements PipeTransform {
  transform(value: Array<object>, args: string = ""): any {
 return  value.filter(x => x["types"].find(y => y["name"] == args) != null);
  }
}
