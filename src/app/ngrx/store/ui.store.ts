
/*
 * This is an example of an ngrx/store that serves as an example of how to use it
 * In this case, its state simply consists of a single boolean, but more complex states
 * are handled exactly the same way.
 *
 */

import { Action } from '@ngrx/store';

// These are the actions that this store supports
// Note that the constant's value is prefixed with the store name. This isn't mandatory in this case, but when
// you have multiple stores that have simlar action names such as SAVE, you will want to distinguish them
export const UI_ACTIONS = {
  START_LOADING: 'UI:START_LOADING',
  STOP_LOADING: 'UI:STOP_LOADING'
};

// Define the interface for the state that this store manages
export interface State {
  isLoading: boolean;
}

// This is the initial state
const initialState: State = {
  isLoading: false
};

// The reducer for this store. It responds to its actions and
// returns a new state object. It is important that you don't change the state and instead
// you return a new one. this can be done using Object.assign as shown here which takes the objects
// passed in and merges each one into the first one and returns it.
// In this case, since the state has only one property, you could just return a new state easily with
//
//    return {isLoading: true};
//
// However, usually there is more than one property in a store's state
//
// You can also use the spread operator to merge the state and your changes into a new object
//
//    return {...state, isLoading:true};
//
// However, the spread syntax for objects is not standardized yet
//
export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case UI_ACTIONS.START_LOADING:
      return Object.assign({}, state, { isLoading: true });

    case UI_ACTIONS.STOP_LOADING:
      return Object.assign({}, state, { isLoading: false });

    default:
      return state;
  }
};

// Return any helper functions that you would like to expose to access parts of your state
// For example, if your state maintained a collection of items and properties you want to filter by,
// you may export a function to return the whole list and a function that returns the filtered list

export const isLoading = ((state: State) => state.isLoading);
