import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import Post from './post';

class Favorites extends PureComponent {

  render() {
    const {
      favoritesList,
      favorites,
      goToPost,
      handleDelete
    } = this.props;

    return (
      <FlatList
        style={{ flex: 1 }}
        data={favoritesList}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <Post
            goToPost={goToPost.bind(null, item)}
            onDelete={handleDelete.bind(null, item)}
            favorite={favorites.indexOf(item.id) != -1}
            post={item}
          />
        )}
      />
    );
  }
}

export default Favorites;
