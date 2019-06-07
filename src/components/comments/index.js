import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  FlatList
} from 'react-native';
import { getComments } from 'rnPosts/src/actions/comments';

class Comments extends Component {

  componentDidMount() {
    this.props.dispatch();
  }

  render() {
    const { comments } = this.props;

    return (
      <View>
        <FlatList
          data={comments}

        />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { postComments } = state.comments;
  const comments = postComments[props.postId]
    ? postComments[props.postId]
    : [];

  return {
    comments
  }
}

export default connect()(Comments);