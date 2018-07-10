import c from './../constants';

export default (state = {}, action) => {
  let newState;
  const { title, content, upvote, downvote, netvote, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case c.ADD_POST: {
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
  }

  case c.ADD_UPVOTE: {
    const newUpvote = Object.assign({}, state[id]);
    newUpvote.upvote += 1;
    newUpvote.netvote += 1;
    newState = Object.assign({}, state, {
      [id]: newUpvote
    });
    return newState;
  }

  case c.ADD_DOWNVOTE: {
    const newDownvote = Object.assign({}, state[id]);
    newDownvote.downvote += 1;
    newDownvote.netvote -= 1;
    newState = Object.assign({}, state, {
      [id]: newDownvote
    });
    return newState;
  }


  case c.UPDATE_TIME: {
    const newPost = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newPost
    });
    return newState;
  }

  default: {
    return state;
  }
  }
};
