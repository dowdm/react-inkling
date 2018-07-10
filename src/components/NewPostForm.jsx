import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import c from './../constants';

function NewPostForm(props){
  let title = null;
  let content = null;


  function handleNewPostFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_POST,
      id: v4(),
      title: title.value,
      content: content.value,
      upvote: 1,
      downvote: 0,
      netvote:  1,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    title.value = '';
    content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {title = input;}} />
        <textarea
          type='text'
          id='content'
          placeholder='Content'
          ref={(input) => {content = input;}} />
        <button type='submit'>Blurb</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewPostForm);
