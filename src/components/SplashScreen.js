import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(()=>{Actions.home()}, 2000);
    
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Book Shelf</Text>
        <Image
          source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={styles.icon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "center",   
    flex: 1
  },
  icon: {
    height: 200,
    width: 200,
    borderRadius: 10
  },
  text: {
    color: "#666666",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Roboto",
    alignSelf: "center",
    marginBottom: 50
  }
});
export default SplashScreen;
