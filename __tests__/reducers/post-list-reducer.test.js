import postListReducer from './../../src/reducers/post-list-reducer';
import Moment from 'moment';
import c from './../../src/constants';

describe('postListReducer', () => {

  let action;
  const samplePostData = {
    title: 'Cats',
    content: 'meow meow meow',
    upvote: 1,
    downvote: 0,
    netvote: 1,
    timeOpen: 1500000000000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { title, content, upvote, downvote, netvote, timeOpen, id } = samplePostData;
    action = {
      type: c.ADD_POST,
      title: title,
      content: content,
      upvote: upvote,
      downvote: downvote,
      netvote: netvote,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        content: content,
        upvote: upvote,
        downvote: downvote,
        netvote: netvote,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

  test('New post should include Moment-formatted wait times', () => {
    const { title, content, upvote, downvote, netvote, timeOpen, id  } = samplePostData;
    action = {
      type: c.ADD_POST,
      title: title,
      content: content,
      upvote: upvote,
      downvote: downvote,
      netvote: netvote,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        content: content,
        upvote: upvote,
        downvote: downvote,
        netvote: netvote,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

  test('Should add freshly-calculated Moment-formatted wait time to post entry', () => {
    const { title, content, upvote, downvote, netvote, timeOpen, id } = samplePostData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(postListReducer({ [id] : samplePostData }, action)).toEqual({
      [id] : {
        title: title,
        content: content,
        upvote: upvote,
        downvote: downvote,
        netvote: netvote,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });
});
