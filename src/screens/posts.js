import React from 'react';
import Posts from '../components/posts';

const PostsScreen = (props) => <Posts {...props} />;

PostsScreen.navigationOptions = () => {
  return {
    title: 'Posts',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#4DAB42'
    }
  }
}

export default PostsScreen;