import c from './../constants';

export default (state = {}, action) => {
  switch(action.type) {
  case c.SELECT_POST:
    return action.ticketId;
  default:
    return state;
  }
};
