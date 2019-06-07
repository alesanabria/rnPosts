import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Comments from '../comments';
import { markReadPost } from 'rnPosts/src/actions/posts';
import { getUser } from 'rnPosts/src/actions/users';

class Post extends Component {

  componentDidMount() {
    const { post } = this.props;
    this.props.dispatch(getUser(post.userId));
    this.props.dispatch(markReadPost(post.id));
  }

  render() {
    const { post, user } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.body}>{post.body}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>User</Text>
          <Text style={styles.userText}>{user.name}</Text>
          <Text style={styles.userText}>{user.email}</Text>
          <Text style={styles.userText}>{user.phone}</Text>
          <Text style={styles.userText}>{user.website}</Text>
        </View>

        <View style={styles.commentsTitleContainer}>
          <Text style={styles.commentsTitle}>COMMENTS</Text>
        </View>
        <Comments postId={post.id} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 8,
    marginBottom: 16
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#383838',
    marginBottom: 16
  },
  body: {
    color: '#8A8A8A',
    fontSize: 16,
    lineHeight: 24
  },
  userText: {
    color: '#8A8A8A',
    fontSize: 14,
    marginBottom: 8
  },
  commentsTitleContainer: {
    backgroundColor: '#E8E8E8',
    paddingVertical: 2,
    paddingHorizontal: 8
  },
  commentsTitle: {
    fontSize: 18,
    color: '#8A8A8A'
  }
});

const stateMapToProps = (state, props) => {
  const user = state.users.entities[props.post.userId]
    ? state.users.entities[props.post.userId]
    : {};

  return {
    user
  }
}

export default connect(stateMapToProps)(Post);