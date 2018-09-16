import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

// Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Store
import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// bootstrap
import { AppComponent } from "./app.component";

// not used in production
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

// routes
export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "products" },
  {
    path: "products",
    loadChildren: "../products/products.module#ProductsModule"
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.development
      ? StoreDevtoolsModule.instrument({
          name: "Ultimate Pizza Store DevTools",
          logOnly: environment.production
        })
      : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
