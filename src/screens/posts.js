import React from 'react';
import Posts from '../components/posts';
import RefreshBtn from '../components/shared/refreshBtn';

const PostsScreen = (props) => <Posts {...props} />;

PostsScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Posts',
    headerRight: <RefreshBtn />,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#4DAB42'
    }
  }
}

export default PostsScreen;