/**
 * This is the main file that will aggregate your stores
 * Make sure you have installed the required dependencies
 *  npm install --save @ngrx/{core,store} reselect ngrx-store-freeze
 */

// Import each of your stores using the convention:
//      import * as from[STORE_NAME] from './STORE_NAME.store';
import * as fromUI from './ui.store';

import { ActionReducer, combineReducers } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core';
import { createSelector } from 'reselect';

// Aggregate all of the individual states into one main state
// this State should have a property for each of you child states
export interface State {
    ui: fromUI.State;
}

// Aggregate all of the reducers in a similar way
const reducers = {
    ui: fromUI.reducer
};

// Adding the storeFreeze is useful in development because it will cause an exception to be thrown
// if you accidentally mutate the state
const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

// We only want to add in the storeFreeze meta-reducer in non-production builds
// we read the production flag from the environment (which will resolve to the correct one during the webpack build)
export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

// We will expose a function for getting each state out of our aggregate state
export const getUIState = (state: State) => state.ui;
// We will expose the selectors from each of the states by creating a nested selector
// using the functions exposed in each store.
export const getIsLoading = createSelector(getUIState, fromUI.isLoading);

