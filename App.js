/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Root } from 'native-base';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers/index'
import thunkMiddleware from 'redux-thunk'
import AppNavigator from './AppNavigator'


const store = createStore(reducer, applyMiddleware(thunkMiddleware))


export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
      </Root>
    )
  }
}


