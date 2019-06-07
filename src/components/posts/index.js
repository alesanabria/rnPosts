import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  FlatList
} from 'react-native';
import {
  getPosts
} from 'rnPosts/src/actions/posts';
import Post from './post';

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts());
  }

  render() {
    const { posts } = this.props;

    return (
      <View>
        <FlatList
          data={posts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) =>
            <Post
              post={item}
            />
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { entities, favorites } = state.posts;

  return {
    posts: entities,
    favorites
  }
}

export default connect(mapStateToProps)(Posts);