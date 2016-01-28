import * as ActionTypes from './actionTypes'

/*
 * action creators
 */
export function addFoo(state) {
  return { type: ActionTypes.ADD_FOO, state };
}

export function addBar(state) {
  return { type: ActionTypes.ADD_BAR, state };
}