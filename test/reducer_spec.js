import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        item: Map({
          sub_item: List.of(1, 2, 3),
          another_sub_item: 'some string'
        })
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      item: {
        sub_item: [1, 2, 3],
        another_sub_item: 'some string'
      }
    }));
  });


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

});
