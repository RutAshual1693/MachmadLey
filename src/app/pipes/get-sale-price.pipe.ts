import { Pipe, PipeTransform } from '@angular/core';
import { SalesService } from '../services/sales.service';

@Pipe({
  name: 'getSalePrice'
})
export class GetSalePricePipe implements PipeTransform {

  constructor(private salesService: SalesService) {


  }
  transform(value: Array<object>, args: object): any {
    console.log(value);
      for (let sales of value) {
        for (let sale of sales["selected"])
          if (sale["_id"] == args["_id"]) {
            this.salesService.onSale = true;
            if (sales["kind"] == 'הנחה באחוזים') 
              return "₪" +( args["price"] - (sales["count"] / 100) * args["price"]);
            return "₪" +( args["price"] - sales["count"] );
          }
    }
    this.salesService.onSale = false;
    return null;
    }


}
