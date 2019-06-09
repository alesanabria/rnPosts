import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import Post from './post';

class Posts extends PureComponent {

  render() {
    const {
      posts,
      favorites,
      canScroll,
      handleScroll,
      handleDelete,
      goToPost
    } = this.props;

    return (
      <FlatList
        style={{ flex: 1 }}
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <Post
            onMove={handleScroll}
            onDelete={handleDelete.bind(null, item)}
            goToPost={goToPost.bind(null, item)}
            favorite={favorites.indexOf(item.id) != -1}
            post={item}
          />
        )}
        scrollEnabled={canScroll}
      />
    );
  }
}

export default Posts;
