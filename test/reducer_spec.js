import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';
import * as ActionTypes from '../src/actions/actionTypes';

describe('reducer', () => {

  it('handles ADD_FOO', () => {
    const initialState = {
      fooReducer: List.of(1, 2), 
      barReducer: 2
    };
    const action = {
      type: ActionTypes.ADD_FOO,
      data: 3
      }
    const nextState = reducer(initialState, action);
    
    expect(nextState.fooReducer).to.equal(List.of(1,2,3));
    expect(nextState.barReducer).to.equal(2);
  });

/*
  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        item: {
          sub_item: [1, 2, 3],
          another_sub_item: 'some string'
        }
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      item: {
        sub_item: [1, 2, 3],
        another_sub_item: 'some string'
      }
    }));
  });

  it('handles set state without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        item: {
          sub_item: [1, 2, 3],
          another_sub_item: 'some string'
        }
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      item: {
        sub_item: [1, 2, 3],
        another_sub_item: 'some string'
      }
    }));
  });
  */

});
