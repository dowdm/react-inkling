import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.postList).map(function(postId) {
        let post = props.postList[postId];
        return <Post title={post.title}
          content={post.content}
          upvote={post.upvote}
          downvote={post.downvote}
          netvote={post.netvote}
          formattedWaitTime={post.formattedWaitTime}
          key={postId}
          postId={postId}/>;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object
};

export default PostList;
