import React, { Component } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import {
  Container,
  Form,
  Content,
  Input,
  Item,
  Textarea,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer,
  Picker,
  FooterTab,
  Toast
} from "native-base";
import { Actions } from "react-native-router-flux";
import { addBooks } from "../actions/bookAction";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textArea: {
    margin: 5
  }
});

class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "read",
      title: "",
      author: "",
      image: "https://facebook.github.io/react-native/docs/assets/favicon.png"
    };
  }

  onPressButton = () => {
    // Alert.alert("Add Book clicked");
    if (this.state.author === "" || this.state.title === "")
      Toast.show({ text: "Please submit a valid author or title" });

    const book = {
      author: this.state.author,
      title: this.state.title,
      category: this.state.selected,
      thumbnail: this.state.image
    };
    this.props.addBooks(book);
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent>
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                onPress={() => Actions.pop()}
              />
            </Button>
          </Left>
          <Body>
            <Title>Add</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content padder>
          <Text style={{ fontSize: 18, marginTop: 10 }}>Title :</Text>
          <Item regular style={{ borderRadius: 5, marginTop: 10 }}>
            <Input
              placeholder="Title"
              style={styles.textArea}
              value={this.state.title}
              onChangeText={value => this.setState({ title: value })}
            />
          </Item>
          <Text style={{ fontSize: 18, marginTop: 15 }}>Author : </Text>
          <Item regular style={{ borderRadius: 5, marginTop: 10 }}>
            <Input
              placeholder="Author"
              style={styles.textArea}
              value={this.state.author}
              onChangeText={value => this.setState({ author: value })}
            />
          </Item>
          <Text style={{ fontSize: 18, marginTop: 15 }}>Image : </Text>
          <Item regular style={{ borderRadius: 5, marginTop: 10 }}>
            <Input placeholder="Image" style={styles.textArea} />
          </Item>
          <Form style={{ marginTop: 15, marginTop: 10 }}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Read" value="read" />
              <Picker.Item label="Want To Read" value="wantToRead" />
              <Picker.Item label="Currently Reading" value="currentlyReading" />
            </Picker>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={this.onPressButton}
              primary
              style={{ alignSelf: "center" }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>Add Book</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

const mapActionsToProps = dispatch => ({
  addBooks: book => addBooks(book)(dispatch)
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddBooks);
