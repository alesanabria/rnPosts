import React from 'react';
import Post from '../components/post';
import FavoriteBtn from '../components/shared/favoriteBtn';

const PostScreen = (props) => <Post {...props.navigation.state.params} />

PostScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Post',
    headerRight: <FavoriteBtn {...navigation.state.params} />,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#4DAB42'
    }
  }
}

export default PostScreen;