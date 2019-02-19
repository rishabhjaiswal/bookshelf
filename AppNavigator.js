import React, { Component } from "react";
import { Router, Scene, Stack } from 'react-native-router-flux'
import Home from './src/components/Home'
import Search from './src/components/Search'
import Book from './src/components/Book'

export default class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">

        <Scene key="book" component={Book} title="Book" initial={false}/>
          <Scene key="home" component={Home} title="Home" initial={true}/>
          <Scene key="search" component={Search} title="Search" />
        </Stack>
      </Router>
    );
  }
}
