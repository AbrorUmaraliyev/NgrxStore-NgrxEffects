import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// My modules
import { SharedModule } from "../shared/shared.module";

// Third party
import { AgGridModule } from "ag-grid-angular";

// Store
import { effects, reducers } from "./store";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// Routing
import { ProductsRoutingModule } from "./products-routing.module";

// Services
import { services } from "../products/services";

// Components
import { ProductsComponent } from "./containers/products/products.component";
import { ProductItemComponent } from "./containers/product-item/product-item.component";
import { PizzaItemComponent } from "./components/pizza-item/pizza-item.component";
import { PizzaFormComponent } from "./components/pizza-form/pizza-form.component";
import { PizzaToppingsComponent } from "./components/pizza-toppings/pizza-toppings.component";
import { PizzaDisplayComponent } from "./components/pizza-display/pizza-display.component";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects),
    AgGridModule.withComponents([])
  ],
  providers: [...services],
  declarations: [
    ProductsComponent,
    ProductItemComponent,
    PizzaItemComponent,
    PizzaFormComponent,
    PizzaToppingsComponent,
    PizzaDisplayComponent
  ],
  exports: [
    // SharedModule,
    // ProductsComponent,
    // ProductItemComponent,
    // PizzaItemComponent,
    // PizzaFormComponent,
    // PizzaToppingsComponent,
    // PizzaDisplayComponent
  ]
})
export class ProductsModule {}
