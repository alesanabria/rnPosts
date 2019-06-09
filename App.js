import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './src/navigator';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#428F28" />
        <Navigator />
      </Provider>
    );
  }
}

export default App;