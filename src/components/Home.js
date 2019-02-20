import React, { Component } from "react";
import { TouchableOpacity, View, Text } from 'react-native'
import { Button, Container, Content, Header, Body, Title, Right, Icon, Left } from "native-base";
import { Actions } from "react-native-router-flux";
import books from "../static/data";
import BookShelf from "./BookShelf";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books,
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
  }

  componentDidMount() {
    console.log("books from data.js  : ", this.state.books);
    let newState = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
    // this.state.books.forEach(book => {
    //   switch (book.category) {
    //     case "currentlyReading":
    //       newState.currentlyReading.push(book);
    //       break;
    //     case "wantToRead":
    //       newState.wantToRead.push(book);
    //       break;
    //     case "read":
    //       newState.read.push(book);
    //       break;
    //     default:
    //       console.log("Should not have occurred");
    //       break;
    //   }
    // });
    // this.setState({currentlyReading: newState.currentlyReading, wantToRead: newState.wantToRead, read: newState.read})
  }
  onPressSearch = (items) => {
    Actions.search({items});
  };
  render() {
    return (
      <Container>
        <Header>
          {/* <Left /> */}
          <Body style={{alignItems: "center"}}>
            <Title style={{alignSelf: "center"}}>Book Shelf</Title>
          </Body>
          <Right>
          <TouchableOpacity onPress={() => Actions.search({books: this.state.books})}>
              <Icon name="search"  style={{color: "white"}}/>
            </TouchableOpacity>
          </Right></Header>
        <Content>
         <BookShelf books={this.state.books} title="Currently Reading"/>
         <BookShelf books={this.state.books} title="Want To Read"/>
         <BookShelf books={this.state.books} title="Read"/>
         
        </Content> 
        <View style={{position: "absolute", right: 20, bottom: 20, zIndex: 5, borderColor: "black", height: 60, width: 60, borderRadius: 30, alignItems: "center", justifyContent: "center", backgroundColor: "#3F51B5" }}>
          <TouchableOpacity onPress={() => Actions.addBooks()}>
            <Text style={{fontSize: 50, color: "white" }}>+</Text>
          </TouchableOpacity>
         </View>
      </Container>
          
    );
  }
}
