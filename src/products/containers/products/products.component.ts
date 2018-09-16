import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
// import * as fromStore from "../../store/reducers";
import { Pizza } from "../../models/pizza.model";
import { Observable } from "rxjs";
// import { LoadPizzas } from "../../store/actions";
import * as fromStore from "../../store";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    this.store.dispatch(new fromStore.LoadPizzas());
  }
}
