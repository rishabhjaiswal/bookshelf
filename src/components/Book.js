import React, { Component } from "react";
import { Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
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
  Right
} from "native-base";

const { height, widht } = Dimensions.get("window");

const Book = props => {
  console.log("------------ inside book------------", props);
  return (
    // <Text>hello book</Text>
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
            <Text>{props.book.title}</Text>
            <Text note>{props.book.author}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody padder>
        <Image
          source={{
            uri: props.book.thumbnail
          }}
          style={{ flex: 1, height: 100, padding:15 }}
        />
      </CardItem>
      {/* <CardItem>
        <Text> hwllo woeld</Text>
      </CardItem> */}
      <CardItem>
        <Body>
          <Text>1,926 stars</Text>
        </Body>
        <Right  style={styles.buttonStyle}>
          <TouchableOpacity >
            <Icon name="logo-github" />
            
          </TouchableOpacity>
        </Right>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    // flex: 0,
    position: "absolute", bottom: 10, right: 10
  }, 
  bookCard: {
    height: height / 2.5, borderRadius: 5 
  }
})

export default Book;
