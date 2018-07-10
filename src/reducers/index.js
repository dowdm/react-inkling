import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterPostList: postListReducer


});

export default rootReducer;
