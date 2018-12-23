import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { PaginationService } from '../../../services/pagination.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ProductOptionsComponent } from '../../../components/administor-components/product-options/product-options.component';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  arr = ["AKC6338 מיטה מלבנית משובצת.JPG", "AKC4600 מיטת אביב מלבנית.JPG", "AKC1500 מיטה אורטופדית דוגמת מעוין.JPG", "AKC3115 מיטת 80 מרובעת3.JPG", "מיטת-זמש-אורטופדית-250x150.jpg", "AKC3462 מיטה פסים עגולה2.JPG", "מיטת-זמש-אורטופדית-250x150.jpg", "מיטת-זמש-אורטופדית-250x150.jpg"]
  listProductByCategoryForSort;
  constructor(private productsService: ProductsService,
    private paginationService: PaginationService,
    private shoppingCartService: ShoppingCartService
  ) { }

   arrProductOption=[];
  productOption() {
    let haveOption = false;
    let i = 0;
    for (let pOptinItem in this.productsService.listProductOptions) {
      for (let pItem in this.productsService.listProductByCategory) {
        for (let pProductOption in this.productsService.listProductByCategory[pItem]["options"]) {
          if (this.productsService.listProductOptions[pOptinItem]["_id"] == this.productsService.listProductByCategory[pItem]["options"][pProductOption]["_id"]) {
            
            haveOption = true;
          }
        }
      }
      if (haveOption == true)
        this.arrProductOption[i++] = this.productsService.listProductOptions[pOptinItem];
    }
  }

  maxPrice() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.sort((a, b) => b['price'] - a['price']);
    this.paginationService.setPage(1);
  }
  minPrice() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.sort((a, b) => a['price'] - b['price']);
    this.paginationService.setPage(1);
  }
  orders() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.filter((a, b) => b["numOfOrders"] - a["numOfOrders"]);
    this.paginationService.setPage(1);
  }
  search(str) {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.filter(x => x["name"].indexOf(str) > 0);
    this.paginationService.setPage(1);
  }

  refresh()
  {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.paginationService.setPage(1);

  }
  checkClicked(values: Array<string>) {
    alert("bina");
    let arrCheck;
    let checkes = [];
    let i = 0;
    let isChecked = false;
    //שמירת כל ערכי אפשרויות המוצר הקיימות לקטגוריה זו
    arrCheck = document.getElementsByClassName("check");
    //checkes בדיקת הערכים שנבחרו ושמירתם במערך  
    for (let item of arrCheck) {
      if (item.checked)
        checkes[i++] = item.value;
    }
    i = 0;
    //arrSortProducts שמירת כל המוצרים במערך 
    let arrSortProducts = this.productsService.listProductByCategory;
    //הקצאת מערך לשימוש זמני השומר בכל סיבוב של הלולאה את המוצרים
    //העומדים בתנאי הסינון של האפשרות מוצר הנוכחית
    let arrP2;
    let isProductOptionChecked = false;;
    //מעבר על מערך אפשרויות מוצר
    for (let option of this.arrProductOption) {
      //מעבר על רשימת המוצרים
      for (let product of arrSortProducts) {
        //מעבר על אמערך אפשרויות מוצר ברשימת המוצרים
        for (let productOption of product["options"]) {
          //מעבר על ערכי אפשרויות המוצר
          for (let item of productOption["values"]) {
            //מעבר על האינפוטים שנבחרו
            for (let value of checkes) {
              //בדיקה האם אחד מערכי אפשרויות המוצר הוא נבחר והוא מהקטגוריה הנוכחית
              if (value == option == item) {
                // סימון המוצר
                isChecked = true;
                //סימון האפשרות מוצר 
                isProductOptionChecked = true;
              }
            }
          }
        }
        //אם המוצר מסומן
        if (isChecked) {
          //הוספת המוצר לרשימת המוצרים
          arrP2[i++] = product;
        }
        //במעבר למוצר הבא איפוס הסימון
        isChecked = false;
      }
      //אם המשתמש סינן את אחד הערכים מהאפשרות המוצר הנוכחית
      if (isProductOptionChecked) {
        //הכנסת המוצרים המסוננים למערך וסינון מחדש...
        arrSortProducts = arrP2;
        //איפוס המערך להכנסת המוצרים המסוננים
        arrP2 = [];
        //איפוס סימון האפשרות מוצר הנוחית
        isProductOptionChecked = false;
      }
    }
    //שמירת המוצרים המסוננים לצורך הצגתם
    this.productsService.listProductByCategory = arrSortProducts;
    this.paginationService.setPage(1);
  }
  ngOnInit() {
    this.productOption();
    this.listProductByCategoryForSort = this.productsService.listProductByCategory.filter(x=>x['_id']!="");
    this.paginationService.setPage(1);
  }
  productDetails(product) {
    this.productsService.showProductDetails = product;
    this.productsService.showProductOptions = this.productsService.listProductOptions.filter(x => product.options.find(y => y._id == x["_id"]) != null);
  }
}
