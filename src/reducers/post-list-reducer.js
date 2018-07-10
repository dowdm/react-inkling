import c from './../constants';

export default (state = {}, action) => {
  let newState;
  const { title, content, upvote, downvote, netvote, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case c.ADD_POST:
    newState = Object.assign({}, state, {
      [id]: {
        title: title,
        content: content,
        upvote: upvote,
        downvote: downvote,
        netvote: netvote,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

  case c.UPDATE_TIME:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newTicket
    });
    return newState;

  default:
    return state;
  }
};
