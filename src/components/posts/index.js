import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  getPosts,
  removePost,
  clearPosts,
  getFavorites
} from 'rnPosts/src/actions/posts';
import Posts from './posts';
import Favorites from './favorites';
import ClearBtn from './clearBtn';
import Tabs from './tabs';

class PostsContainer extends Component {
  state = {
    refs: [],
    canScroll: true
  };

  componentDidMount() {
    this.props.dispatch(getPosts());
    this.props.dispatch(getFavorites());
  }

  handleClear = () => {
    this.props.dispatch(clearPosts());
  };

  goToPost = post => {
    this.props.navigation.navigate({ routeName: 'Post', params: { post } });
  };

  handleDelete = post => {
    this.props.dispatch(removePost(post.id));
  };

  handleScroll = canScroll => {
    this.setState({ canScroll });
  };

  render() {
    const { posts, favorites, favoritesList } = this.props;
    const { canScroll } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Tabs>
          <Posts
            posts={posts}
            favorites={favorites}
            canScroll={canScroll}
            handleScroll={this.handleScroll}
            handleDelete={this.handleDelete}
            goToPost={this.goToPost}
          />
          <Favorites
            favorites={favorites}
            favoritesList={favoritesList}
            canScroll={canScroll}
            handleScroll={this.handleScroll}
            handleDelete={this.handleDelete}
            goToPost={this.goToPost}
          />
        </Tabs>
        <ClearBtn onClear={this.handleClear} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  }
});

const mapStateToProps = state => {
  const { entities, favorites } = state.posts;
  const favoritesList = entities.filter(
    post => favorites.indexOf(post.id) != -1
  );

  return {
    posts: entities,
    favorites,
    favoritesList
  };
};

export default connect(mapStateToProps)(PostsContainer);
