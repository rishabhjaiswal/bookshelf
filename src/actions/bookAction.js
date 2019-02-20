import { Toast } from "native-base";
import firebase from "./Firebase";
export const FETCH_BOOKS_REQUESTED = "FETCH_BOOKS_REQUESTED";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export function fetchBooks() {
  console.log("in actions.......");
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
          console.log("in success..........", snapshot);
          dispatch({
            type: FETCH_BOOKS_SUCCESS,
            payload: snapshot.val()
          });
        },
        error => {
          console.log(error);
          Toast.show({ text: "Error Fetching Adoption BOOKS" });
          dispatch({
            type: FETCH_BOOKS_FAILURE,
            payload: {}
          });
        }
      );
  };
}
