import { createStackNavigator, createAppContainer } from 'react-navigation';
import Posts from './screens/posts';
import Post from './screens/post';

const Navigator = createStackNavigator({
  Posts,
  Post
});

const AppContainer = createAppContainer(Navigator);

export default AppContainer;