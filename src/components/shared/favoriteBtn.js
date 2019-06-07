import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { addFavoritePost, removeFavoritePost } from 'rnPosts/src/actions/posts';

class FavoriteBtn extends PureComponent {

  isFavorite = () => {
    const { favorites, post } = this.props;
    return favorites.indexOf(post.id) !== -1;
  }

  handleToggle = () => {
    const favorite = this.isFavorite();
    const { post } = this.props;

    if(favorite) {
      this.props.dispatch(removeFavoritePost(post.id));
    } else {
      this.props.dispatch(addFavoritePost(post.id));
    }
  }

  render() {
    const favorite = this.isFavorite();
    console.log(this.props);

    return (
      <TouchableOpacity style={styles.btn} onPress={this.handleToggle}>
        <IonIcons
          name={favorite ? 'ios-star' : 'ios-star-outline'}
          color={favorite ? "#F6E652" : "#fff"}
          size={24}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    paddingRight: 16
  }
});

const mapStateToProps = (state) => {
  const { favorites } = state.posts;

  return {
    favorites
  }
}

export default connect(mapStateToProps)(FavoriteBtn);