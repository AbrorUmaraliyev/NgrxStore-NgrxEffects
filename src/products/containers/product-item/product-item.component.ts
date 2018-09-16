import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Pizza } from "../../models/pizza.model";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor() {}

  ngOnInit() {}
}
