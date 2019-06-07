import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  FlatList
} from 'react-native';
import Comment from './comment';
import { getComments } from 'rnPosts/src/actions/comments';

class Comments extends Component {

  componentDidMount() {
    this.props.dispatch(getComments(this.props.postId));
  }

  render() {
    const { comments } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={comments}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Comment comment={item}/>}
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

    console.log(comments, postComments, props);

  return {
    comments
  }
}

export default connect(mapStateToProps)(Comments);