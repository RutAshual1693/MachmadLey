import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ActivatedRoute } from '@angular/router/src/router_state'
import { RouterModule } from '@angular/router';
import { routes } from './routes'

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode } from '@angular/core/src/application_ref';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LinksComponent } from './components/links/links.component';
import { ProductsService } from './services/products.service';
import { AddComponent } from './components/administor-components/add/add.component';
import { AdministorComponent } from './components/administor-components/administor/administor.component';
import { MainComponent } from './components/administor-components/main/main.component';
import { StoreSettingsComponent } from './components/administor-components/store-settings/store-settings.component';
import { CustomersAndOrdersComponent } from './components/administor-components/customers-and-orders/customers-and-orders.component';
import { StoreManagementComponent } from './components/administor-components/store-management/store-management.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { CategoriesComponent } from './components/administor-components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { AddCategoryComponent } from './components/administor-components/add-category/add-category.component';
import { EditCategoryComponent } from './components/administor-components/edit-category/edit-category.component';
import { ProductOptionsComponent } from './components/administor-components/product-options/product-options.component';
import { ClientComponent } from './components/client-components/client/client.component';
import { ListProductComponent } from './components/client-components/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LinksComponent,
    AddComponent,
    AdministorComponent,
    EditProductsComponent,
    MainComponent,
    StoreSettingsComponent,
    CustomersAndOrdersComponent,
    StoreManagementComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ProductOptionsComponent,
    ClientComponent,
    ListProductComponent,
   

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductsService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
