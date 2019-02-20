import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Picker,
  Modal,
  TouchableHighlight
} from "react-native";
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
  ActionSheet
} from "native-base";

const { height, widht } = Dimensions.get("window");

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Want To Read",
      modalVisible: false
    };
    // this.onPressButton = this.onPressButton.bind(this);
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  renderPicker = () => {
    console.log("state changed ro submit", this.state.selected);
    return (
      <Form style={{ marginTop: 15, marginTop: 10, flex: 1 }}>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        >
          <Picker.Item label="Read" value="Read" />
          <Picker.Item label="Want To Read" value="Want To Read" />
          <Picker.Item label="Currently Reading" value="Currently Reading" />
        </Picker>
      </Form>
    );
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    console.log("------------ inside book------------", this.props);
    return (
      // <Text>hello book</Text>
      <TouchableOpacity
        onPress={() => {
          this.setModalVisible(true);
        }}
      >
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
                borderColor: "black",
                height: 40,
                width: 40,
                // zIndex: 10,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3F51B5"
              }}
            >
              <Text style={{ fontSize: 30, color: "white" }}>+</Text>
            </View>
          </CardItem>
          <CardItem>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={{ marginTop: 22 }}>
                <View style={{ flexDirection: "column" }}>
                  {/* <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight> */}
                  {this.renderPicker()}
                  <TouchableHighlight
                    style={{
                      position: "absolute",
                      top: 200,
                      alignSelf: "center"
                    }}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>Submit</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{
                      position: "absolute",
                      top: 250,
                      alignSelf: "center"
                    }}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
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
    height: height / 2.4,
    borderRadius: 5,
    justifyContent: "space-evenly"
  }
});

export default Book;
