import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props){
  return (
    <div>
      <hr/>
      <h1>Post Details</h1>
      <h1>{props.selectedPost.names} - {props.selectedPost.location}</h1>
      <h2>Submitted {props.selectedPost.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedPost.issue}</em></h4>
      <hr/>
    </div>
  );
}

PostDetail.propTypes = {
  selectedPost: PropTypes.object
};

export default PostDetail;
