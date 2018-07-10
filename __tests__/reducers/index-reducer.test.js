import rootReducer from './../../src/reducers/index';
import selectedPostReducer from './../../src/reducers/selected-post-reducer';
import postListReducer from './../../src/reducers/post-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPostList: {},
      selectedPost: {}
    });
  });

  test('Should contain postListReducer logic', () => {
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, { type: null }));
  });

  test('Should contain selectedPostReducer logic', () => {
    expect(store.getState().selectedPost).toEqual(selectedPostReducer(undefined, { type: null }));
  });

});
