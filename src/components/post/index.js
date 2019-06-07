import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View
} from 'react-native';
import Comments from '../comments';

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <View>
        <Text>Description</Text>
        <Text>{post.body}</Text>
        <View>
          <Text>Comments</Text>
        </View>
        <Comments postId={post.id} />
      </View>
    )
  }
}

export default Post;