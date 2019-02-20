import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  Button,
  Container,
  Content,
  Header,
  Body,
  Title,
  Right,
  Icon,
  Left,
  Spinner
} from "native-base";
import { Actions } from "react-native-router-flux";
import books from "../static/data";
import BookShelf from "./BookShelf";
import firebase from "../actions/Firebase";
import { fetchBooks } from "../actions/bookAction";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books
    };
  }

  componentDidMount() {
    let newState = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
    this.readUserData();
  }
  readUserData = () => {
    this.props.fetchBooks();
  };
  onPressSearch = items => {
    Actions.search({ items });
  };

  render() {
    if (this.props.isFetching){
      return <Spinner  color="#3F51B5" style={{alignContent: "center", justifyContent: "center", marginTop: 200}}/>;
    }
    return (
      <Container>
        <Header>
          {/* <Left /> */}
          <Body style={{ alignItems: "center" }}>
            <Title style={{ alignSelf: "center" }}>Book Shelf</Title>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() => Actions.search({ books: this.props.books })}
            >
              <Icon name="search" style={{ color: "white" }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <BookShelf
            books={this.props.currentlyReading}
            title="Currently Reading"
          />
          <BookShelf books={this.props.wantToRead} title="Want To Read" />
          <BookShelf books={this.props.read} title="Read" />
        </Content>
        <View
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            zIndex: 5,
            borderColor: "black",
            height: 60,
            width: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3F51B5"
          }}
        >
          <TouchableOpacity onPress={() => Actions.addBooks()}>
            <Text style={{ fontSize: 50, color: "white" }}>+</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("in mapStatetoporps===========", state.books);
  return {
    books: state.books.books,
    currentlyReading: state.books.currentlyReading,
    wantToRead: state.books.wantToRead,
    read: state.books.read,
    isFetching: state.books.isFetching
  };
};

const mapActionsToProps = dispatch => ({
  fetchBooks: () => fetchBooks()(dispatch)
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home);
