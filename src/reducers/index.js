import selectedTicketReducer from './selected-ticket-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedTicket: selectedTicketReducer,
  masterPostList: postListReducer
});

export default rootReducer;
