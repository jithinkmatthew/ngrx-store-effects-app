import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';
import { Actions } from '@ngrx/effects';
import { Pizza } from '../../models/pizza.model';

// toppings
export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Success';

export const VISUALISE_TOPPINGS = '[Products] Visualise toppings';


export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;

  }

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}

  }

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}

  }

export class VisualiseToppings implements Action {
  readonly type = VISUALISE_TOPPINGS;
  constructor(public payload: number[]) {}
}





//action type
export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSuccess
  | VisualiseToppings;

