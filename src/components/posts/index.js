import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {
  getPosts,
  removePost,
  clearPosts,
  getFavorites
} from 'rnPosts/src/actions/posts';
import Post from './post';
import ClearBtn from './clearBtn';
import Tabs from './tabs';

class Posts extends Component {

  state = {
    refs: [],
    canScroll: true
  }

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

  handleDelete = (post) => {
    this.props.dispatch(removePost(post.id));
  }

  handleScroll = (canScroll) => {
    this.setState({ canScroll });
  }

  render() {
    const { posts, favorites, favoritesList } = this.props;
    const { canScroll } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Tabs>
          <FlatList
            style={{ flex: 1 }}
            data={posts}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) =>
              <Post
                onMove={this.handleScroll}
                onDelete={this.handleDelete.bind(null, item)}
                goToPost={this.goToPost.bind(null, item)}
                favorite={favorites.indexOf(item.id) != -1}
                post={item}
              />
            }
            scrollEnabled={canScroll}
          />
          <FlatList
          style={{ flex: 1 }}
          data={favoritesList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) =>
            <Post
              goToPost={this.goToPost.bind(null, item)}
              onDelete={this.handleDelete.bind(null, item)}
              favorite={favorites.indexOf(item.id) != -1}
              post={item}
            />
          }
        />
        </Tabs>
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
  const favoritesList = entities.filter(post => favorites.indexOf(post.id) != -1);

  return {
    posts: entities,
    favorites,
    favoritesList
  }
}

export default connect(mapStateToProps)(Posts);