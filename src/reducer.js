import {Map, List, fromJS} from 'immutable';
import { combineReducers } from 'redux'

function setState(state, newState) {
   return state.merge(newState);
}

function fooReducer(state = List(), action) {
  switch (action.type) {
    case 'ADD_FOO':
      return state.push(action.data);
  }
  return state;
}

function barReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD_BAR':
      return action.data;
  }
  return state;
}



const reducer = combineReducers({
  fooReducer, 
  barReducer
})

export default reducer;