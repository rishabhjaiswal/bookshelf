import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import {
  Header,
  Container,
  Content,
  Icon,
  Left,
  Body,
  Right,
  Button,
  Title
} from "native-base";
import SearchBar from "react-native-searchbar";
import Book from "./Book";
import { Actions } from "react-native-router-flux";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.books
    };
    this._handleResults = this._handleResults.bind(this);
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, margin: 5 }}>
        <Book book={item} />
      </View>
    );
  };

  keyExtractor = (item, index) => index;

  _handleResults(results) {
    this.setState({ results });
  }

  onPressHome = () => {
    Actions.home();
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={this.onPressHome}>
              <Icon name="home" style={{ color: "white" }} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>Search Books</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => this.searchBar.show()}>
              <Icon name="search" style={{ color: "white" }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <View>
            <View style={{ marginTop: 110 }}>
              <FlatList
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                data={this.state.results}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                numColumns={2}
                columnWrapperStyle={styles.columnContainer}
              />
            </View>
            <SearchBar
              ref={ref => (this.searchBar = ref)}
              data={this.props.books}
              handleResults={this._handleResults}
              showOnLoad
              allDataOnEmptySearch
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    marginTop: 10
  },
  columnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
});
