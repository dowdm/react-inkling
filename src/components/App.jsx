import React from 'react';
import Header from './Header';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import c from './../constants';


class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePostElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePostElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterPostList).map(postId => {
      const post = this.props.masterPostList[postId];
      const newFormattedWaitTime = post.timeOpen.fromNow(true);
      const action = {
        type: c.UPDATE_TIME,
        id: postId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render(){
    return (
      <div>
        <style jsx>{`
          .app-wrapper {
            background-color: #4cfdbb;
            height: 100vh;
          }
        `}</style>
        <div className="app-wrapper">
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><PostList postList={this.props.masterPostList}/>} />
            <Route path='/newpost' component={NewPostForm} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  masterPostList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList
  };
};

export default withRouter(connect(mapStateToProps)(App));
