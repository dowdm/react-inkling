import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

function Post(props){
  function handleUpvoteClick() {
    const { dispatch } = props;
    const action = {
      type: c.ADD_UPVOTE,
      id: props.postId
    };
    dispatch(action);
  }

  return (
    <div>
      <h3>{props.title} - {props.content}</h3>
      <p>{props.formattedWaitTime}</p>
      <p><button onClick={handleUpvoteClick}>Upvote</button>{props.upvote}</p>
      <p>Downvote{props.downvote}</p>
      <p>NetVote{props.netvote}</p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  dispatch: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  upvote: PropTypes.number,
  downvote: PropTypes.number,
  netvote: PropTypes.number,
  formattedWaitTime: PropTypes.string,
  postId: PropTypes.string.isRequired
};

export default connect()(Post);
