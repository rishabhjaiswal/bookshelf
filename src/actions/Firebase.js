import firebase from "react-native-firebase";

let config = {
  appId: "1:643925121217:android:1cf6a49e319ad766",
  databaseURL: "https://bookshelf-42c49.firebaseio.com/",
  projectId: "bookshelf-42c49",
  clientId: "1:643925121217:android:1cf6a49e319ad766",
  apiKey: "AIzaSyAR_QQaTcYT62-RBmyd9ymgCyjbPl7qtzY",
  storageBucket: "bookshelf-42c49.appspot.com",
  messagingSenderId: "643925121217"
};

firebase.initializeApp(config, "bookshelf");

export default firebase;
