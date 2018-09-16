import { Pizza } from "../../models/pizza.model";
import * as fromState from "../actions/pizzas.action";

export interface PizzaState {
  pizzas: Pizza[];
  loaded: boolean;
  loading: boolean;
}

const mockPizza = {
  name: "Seaside Surfin'",
  toppings: [
    {
      id: 6,
      name: "mushroom"
    },
    {
      id: 7,
      name: "olive"
    },
    {
      id: 2,
      name: "bacon"
    },
    {
      id: 3,
      name: "basil"
    },
    {
      id: 1,
      name: "anchovy"
    },
    {
      id: 8,
      name: "onion"
    },
    {
      id: 11,
      name: "sweetcorn"
    },
    {
      id: 9,
      name: "pepper"
    },
    {
      id: 5,
      name: "mozzarella"
    }
  ],
  id: 2
};

export const initialState: PizzaState = {
  pizzas: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromState.pizzasAction
): PizzaState {
  switch (action.type) {
    case fromState.LOAD_PIZZAS: {
      return { ...state, loading: true, loaded: false };
    }
    case fromState.LOAD_PIZZAS_FAIL: {
      // TODO: handle error
      return { ...state, loading: false, loaded: false };
    }
    case fromState.LOAD_PIZZAS_SUCCESS: {
      const data: Pizza[] = action.payload;
      return { ...state, pizzas: data, loading: false, loaded: true };
    }
  }
  return state;
}

export const getPizzas = (state: PizzaState) => state.pizzas;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
