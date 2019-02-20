import React from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import Book from "./Book";
import { Container, Content } from "native-base";
const { height, width } = Dimensions.get("window");

const BookShelf = props => {
  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, margin: 5 }}>
        <Book book={item} />
      </View>
    );
  };

  keyExtractor = (item, index) => index;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={props.books}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
    // marginTop: 10
  },
  separator: {
    marginTop: 10
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center"
  },
  columnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
});

export default BookShelf;
