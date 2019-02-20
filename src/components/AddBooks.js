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

  FooterTab, Toast
} from "native-base";
import { Actions } from "react-native-router-flux";
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
      selected: "key1",
      title: "",
      author: "",
      image: "https://facebook.github.io/react-native/docs/assets/favicon.png"
    };
  }

  onPressButton = () => {
    // Alert.alert("Add Book clicked");
    if (this.state.author==="" || this.state.title === "")
    Toast.show({ text: "Please submit a valid author or title"});
  };
  
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    console.log("state changed : " , this.state.title, "  ", this.state.author
    )
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent>
              <Icon type="Ionicons" name="ios-arrow-back" onPress={() => Actions.pop()} />
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
            <Input placeholder="Title" style={styles.textArea} value={this.state.title} onChangeText={(value) => this.setState({title: value})} />
          </Item>
          <Text style={{ fontSize: 18 , marginTop: 15}}>Author : </Text>
          <Item regular style={{ borderRadius: 5, marginTop: 10 }}>
            <Input placeholder="Author" style={styles.textArea}  value={this.state.author} onChangeText={(value) => this.setState({author: value})} />
          </Item>
          <Text style={{ fontSize: 18, marginTop: 15 }}>Image : </Text>
          <Item regular style={{ borderRadius: 5, marginTop: 10 }}>
            <Input placeholder="Image" style={styles.textArea} />
          </Item>
          <Form style={{  marginTop: 15, marginTop: 10 }}>
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
        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={this.onPressButton}
              primary
              style={{ alignSelf: "center" }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                Add Book
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default AddBooks;
