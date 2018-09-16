import { PizzasService } from "./pizzas.service";
import { ToppingsService } from "./toppings.service";
import { SnackBarService } from "./snack-bar.service";

export const services: any[] = [PizzasService, ToppingsService, SnackBarService];

export * from "./pizzas.service";
export * from "./toppings.service";
export * from "./snack-bar.service";
