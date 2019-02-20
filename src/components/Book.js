import React, { Component } from "react";
import { Image, TouchableOpacity, Dimensions, StyleSheet, Alert } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Button,
  Icon,
  Thumbnail,
  View,
  Right,
  Form,
  Picker
} from "native-base";

const { height, widht } = Dimensions.get("window");

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
    // this.onPressButton = this.onPressButton.bind(this);
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  onPressButton = () => {
    return (
      <Form style={{ marginTop: 15, marginTop: 10, zIndex: 1, flex: 1 }}>
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        selectedValue={this.state.selected}
        onValueChange={this.onValueChange.bind(this)}
      >
        <Picker.Item label="Read" value="key0" />
        <Picker.Item label="Want To Read" value="key1" />
        <Picker.Item label="Currently Reading" value="key2" />
      </Picker>
    </Form>
    )
  };
  render() {
    console.log("------------ inside book------------", this.props);
    return (
      // <Text>hello book</Text>
      <TouchableOpacity onPress={() => Alert.alert("hellow world")}>
      <Card style={styles.bookCard}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://facebook.github.io/react-native/docs/assets/favicon.png"
              }}
            />
            <Body>
              <Text>{this.props.book.title}</Text>
              <Text note>{this.props.book.author}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody padder>
          <Image
            source={{
              uri: this.props.book.thumbnail
            }}
            style={{ flex: 1, height: 100, padding: 15 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text>1,926 stars</Text>
          </Body>
        </CardItem>
        <CardItem>
         
            <View
              style={{
                position: "absolute",
                right: 10,
                bottom: 10,
                zIndex: 50,
                borderColor: "black",
                height: 40,
                width: 40,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3F51B5"
              }}
            >
              <Text style={{ fontSize: 30, color: "white" }}>+</Text>
            </View>
          
        </CardItem>
      </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    // flex: 0,
    position: "absolute",
    bottom: 10,
    right: 10
  },
  bookCard: {
    height: height / 2.5,
    borderRadius: 5,
    justifyContent: "space-evenly"
  }
});

export default Book;
