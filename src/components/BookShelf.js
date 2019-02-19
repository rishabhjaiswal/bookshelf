import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import Book from "./Book";
import { Container, Content } from "native-base";

const BookShelf = props => {
  console.log("...............kinside BookShelf...........", props.books);
  renderItem = ({ item }) => <Book book={item} />;

  keyExtractor = (item, index) => item.id.toString();

  return (
    <View style={styles.container}>
     <Text style={styles.titleText}>{props.title}</Text>
   
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={props.books}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  separator: {
    marginTop: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: "center"
  },
});

export default BookShelf;
