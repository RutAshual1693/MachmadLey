import { Routes } from "@angular/router";
import { HomeComponent } from "./components/client-components/home/home.component";
import { LinksComponent } from "./components/client-components/links/links.component";
import { ProductsComponent } from "./components/client-components/products/products.component";
import { AddComponent } from "./components/administor-components/add/add.component";
import { AdministorComponent } from "./components/administor-components/administor/administor.component";
import { MainComponent } from "./components/administor-components/main/main.component";
import { CustomersAndOrdersComponent } from "./components/administor-components/customers-and-orders/customers-and-orders.component";
import { StoreSettingsComponent } from "./components/administor-components/store-settings/store-settings.component";
import { StoreManagementComponent } from "./components/administor-components/store-management/store-management.component";
import { EditProductsComponent } from "./components/administor-components/edit-products/edit-products.component";
import { CategoriesComponent } from "./components/administor-components/categories/categories.component";
import { AddCategoryComponent } from "./components/administor-components/add-category/add-category.component";
import { EditCategoryComponent } from "./components/administor-components/edit-category/edit-category.component";
import { ProductOptionsComponent } from "./components/administor-components/product-options/product-options.component";
import { ClientComponent } from "./components/client-components/client/client.component";
import { EditProductOptionComponent } from "./components/administor-components/edit-product-option/edit-product-option.component";
import { CustomersComponent } from "./components/administor-components/customers/customers.component";
import { AddCustomerComponent } from "./components/administor-components/add-customer/add-customer.component";
import { EditCustomerComponent } from "./components/administor-components/edit-customer/edit-customer.component";

export const routes: Routes = [

  {
    path: "links",
    component: LinksComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "client",
    component: ClientComponent
  },
  {
    path: "administor",
    component: AdministorComponent,
    children: [
      {
        path: "products",
        component: EditProductsComponent,
        children: [
          {
            path: "add",
            component: AddComponent,
          }, 
        ]
      },
      {
        path: "main",
        component: MainComponent,
      },
      {
            path: "customers",
            component: CustomersComponent,
            children: [
              {
                path: "addCustomer",
                component: AddCustomerComponent,
              },
              {
                path: "editCastomer",
                component: EditCustomerComponent,
              },
            ]
          },
      {
        path: "storeSettings",
        component: StoreSettingsComponent,
      },
      {
        path: "storeManagement",
        component: StoreManagementComponent,
      },
      {
        path: "categories",
        component: CategoriesComponent,
        children: [
          {
            path: "addCategory",
            component: AddCategoryComponent
          },
          {
            path: "editCategory",
            component: EditCategoryComponent
          }]
      },
      {
        path: "productOptions",
        component: ProductOptionsComponent,
        children: [{
          path: "editProductOption",
          component: EditProductOptionComponent
        }

        ]
      },
    ]
  },


]
