import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
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

const Book = props => {
  console.log("------------ inside book------------", props);
  return (
    // <Text>hello book</Text>
    <Card>
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
      <CardItem cardBody>
        <Image
          source={{
            uri: props.book.thumbnail
          }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Text> hwllo woeld</Text>
      </CardItem>
      <CardItem>
        <Right>
          <TouchableOpacity>
            <Icon name="logo-github" />
            <Text>1,926 stars</Text>
          </TouchableOpacity>
        </Right>
      </CardItem>
    </Card>
  );
};

export default Book;
