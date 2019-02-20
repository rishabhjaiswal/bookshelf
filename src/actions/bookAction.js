import { Toast } from "native-base";
import firebase from "./Firebase";
import { Actions } from "react-native-router-flux";
export const FETCH_BOOKS_REQUESTED = "FETCH_BOOKS_REQUESTED";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const ADD_BOOKS_REQUESTED = "ADD_BOOKS_REQUESTED";
export const ADD_BOOKS_SUCCESS = "ADD_BOOKS_SUCCESS";
export const ADD_BOOKS_FAILURE = "ADD_BOOKS_FAILURE";

export const UPDATE_BOOKS_REQUESTED = "UPDATE_BOOKS_REQUESTED";
export const UPDATE_BOOKS_SUCCESS = "UPDATE_BOOKS_SUCCESS";
export const UPDATE_BOOKS_FAILURE = "UPDATE_BOOKS_FAILURE";

export function fetchBooks() {
  return dispatch => {
    dispatch({
      type: FETCH_BOOKS_REQUESTED,
      payload: {}
    });
    firebase
      .database()
      .ref("books")
      .on(
        "value",
        snapshot => {
          dispatch({
            type: FETCH_BOOKS_SUCCESS,
            payload: snapshot.val()
          });
        },
        error => {
          Toast.show({ text: "Error Fetching BOOKS" });
          dispatch({
            type: FETCH_BOOKS_FAILURE,
            payload: {}
          });
        }
      );
  };
}

export function updateBooks(data) {
  const { id, category } = data;
  return dispatch => {
    dispatch({
      type: UPDATE_BOOKS_REQUESTED,
      payload: {}
    });
    firebase
      .database()
      .ref("books")
      .child(id)
      .update(
        {
          category: category
        },
        snapshot => {
          dispatch({
            type: UPDATE_BOOKS_SUCCESS,
            payload: snapshot
          });
          Actions.home();
          Toast.show("Successfully Updated!!!");
        },
        error => {
          Toast.show({ text: "Error Updating BOOKS" });
          dispatch({
            type: UPDATE_BOOKS_FAILURE,
            payload: {}
          });
        }
      );
  };
}

export function addBooks(book) {
  return dispatch => {
    dispatch({
      type: ADD_BOOKS_REQUESTED,
      payload: {}
    });

    // firebase
    //   .database()
    //   .ref()
    //   .child("books")
    //   .push(
    //     book,
    //     data => {
    //       dispatch({
    //         type: ADD_BOOKS_SUCCESS,
    //         payload: data
    //       });
    //       Actions.home();
    //     },
    //     error => {
    //       Toast.show({ text: "Error Adding BOOKS" });
    //       dispatch({
    //         type: ADD_BOOKS_FAILURE,
    //         payload: {}
    //       });
    //     }
    //   );
    firebase
      .database()
      .ref()
      .child("books")
      .push()
      .set(book)
      .then(data => {
        //success callback

        dispatch({
          type: ADD_BOOKS_SUCCESS,
          payload: data
        });
        Actions.home();
      })
      .catch(error => {
        //error callback
        Toast.show({ text: "Error Adding BOOKS" });
        dispatch({
          type: ADD_BOOKS_FAILURE,
          payload: {}
        });
      });
  };
}
