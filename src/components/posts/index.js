import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { getPosts, clearPosts, getFavorites } from 'rnPosts/src/actions/posts';
import Post from './post';
import ClearBtn from './clearBtn';

class Posts extends Component {

  componentDidMount() {
    this.props.dispatch(getPosts());
    this.props.dispatch(getFavorites());
  }

  handleClear = () => {
    this.props.dispatch(clearPosts());
  }

  goToPost = (post) => {
    this.props.navigation.navigate({ routeName: 'Post', params: { post } });
  }

  render() {
    const { posts, favorites } = this.props;

    console.log('favorites', favorites);

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={posts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) =>
            <Post
              goToPost={this.goToPost.bind(null, item)}
              post={item}
            />
          }
        />
        <ClearBtn onClear={this.handleClear} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  }
});

const mapStateToProps = (state) => {
  const { entities, favorites } = state.posts;

  return {
    posts: entities,
    favorites
  }
}

export default connect(mapStateToProps)(Posts);