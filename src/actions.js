/*
 * action types
 */

export const SET_STATE = 'SET_STATE';


/*
 * action creators
 */
export function setState(state) {
  return { type: SET_STATE, state };
}