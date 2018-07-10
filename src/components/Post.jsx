import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

function Post(props){
  function handleSavingSelectedPost(ticketId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_POST,
      postId: postId
    };
    dispatch(action);
  }
  const postInformation =
    <div>
      <style jsx>{`
        .red-text {
          color: red;
        }
        `}</style>

      <h3>{props.title} - {props.content}</h3>
      <p>{props.formattedWaitTime}</p>
      <p>Upvote{props.upvote}</p>
      <p>Downvote{props.downvote}</p>
      <p>NetVote{props.netvote}</p>
      <hr/>
    </div>;

  return (
    <div onClick={() => {handleSavingSelectedPost(props.postId);}}>
      {postInformation}
    </div>
  );
}

// Ticket.propTypes = {
//   names: PropTypes.string,
//   location: PropTypes.string,
//   issue: PropTypes.string,
//   formattedWaitTime: PropTypes.string.isRequired,
//   currentRouterPath: PropTypes.string,
//   ticketId: PropTypes.string.isRequired
// };

export default connect()(Post);
