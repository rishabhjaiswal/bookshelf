import React, { Component } from "react";
import { Button, Container, Content, Header } from "native-base";
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
  onPress = () => {
    Actions.search();
  };
  render() {
    return (
      <Container>
        <Content>
         <BookShelf books={this.state.books} title="read"/>
        </Content>
      </Container>
          
    );
  }
}
