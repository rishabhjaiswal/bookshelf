import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Picker,
  Modal,
  Alert
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
import { updateBooks } from "../actions/bookAction";
import { connect } from "react-redux";

const { height, widht } = Dimensions.get("window");

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "wantToRead",
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
    return (
      <Form style={{ marginTop: 15, marginTop: 10, flex: 1 }}>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        >
          <Picker.Item label="Want To Read" value="wantToRead" />
          <Picker.Item label="Read" value="read" />
          <Picker.Item label="Currently Reading" value="currentlyReading" />
        </Picker>
      </Form>
    );
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onSubmit(index) {
    const data = {
      id: index,
      category: this.state.selected
    };
    this.props.updateBooks(data);
  }

  render() {
    console.log(
      "=====================",
      this.props.isUpdating,
      "........",
      this.props.success
    );
    const index = this.props.book.index;
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
              <Icon type="MaterialCommunityIcons" name="account-edit" style={{color: "white"}}/>
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
                  <Button
                    style={{
                      position: "absolute",
                      top: 200,
                      alignSelf: "center"
                    }}
                    onPress={() => this.onSubmit(index)}
                  >
                    <Text>Submit</Text>
                  </Button>
                  <Button
                    style={{
                      position: "absolute",
                      top: 300,
                      alignSelf: "center"
                    }}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>Cancel</Text>
                  </Button>
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

const mapStateToProps = (state, props) => {
  return {
    isUpdating: state.books.isUpdating,
    success: state.books.success
  };
};

const mapActionsToProps = dispatch => ({
  updateBooks: data => updateBooks(data)(dispatch)
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Book);
