import React, { Component } from "react";
import { Router, Scene, Actions } from 'react-native-router-flux'
import Home from './src/components/Home'
import Search from './src/components/Search'
import AddBooks from "./src/components/AddBooks";

backMainScene = false

export default class AppNavigator extends Component {
  render() {
    return (
      <Router backAndroidHandler={() => {
        console.log("Back handler Scene : ", Actions.currentScene);
            if (Actions.currentScene == "_main") {
                if (!backMainScene) {
                    Toast.show({text:"Click back again to exit."});
                    backMainScene = !backMainScene
                    return true;
                } else {
                  backMainScene = false;
                  BackHandler.exitApp();
                }
                return false;
            }
            return false;

          }}
          >
        <Scene>
          <Scene key="home" component={Home} title="Home" initial={true} hideNavBar="true"/>
          <Scene key="search" component={Search} title="Search"  initial={false}  hideNavBar="true" />
          <Scene key="addBooks" component={AddBooks} title="AddBooks" initial={false} hideNavBar="true" />
          {/* <Scene key="signUp" component={SignUp} title="SignUp" initial={true} hideNavBar="true" /> */}
        </Scene>
      </Router>
    );
  }
}
