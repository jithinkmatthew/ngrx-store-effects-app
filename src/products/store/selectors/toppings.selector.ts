import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeatures from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

export const getToppingsState = createSelector(
  fromFeatures.getProductsState,
  (state: fromFeatures.ProductsState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingsEntities
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  fromToppings.getSelectedToppings
);

export const getAllToppings = createSelector(
  getToppingsEntities,
  (entities) => {
    console.log(entities);
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);
