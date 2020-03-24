import 'react-native-gesture-handler';
import React from 'react';
import Tabs from './src/config/routes';
import { Provider } from 'react-redux'
import store from './src/config/Redux/store'
export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
};