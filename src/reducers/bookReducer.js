const todos = (state = { books: [] }, action) => {
  const payload = action.payload;
  console.log("Action", action);
  switch (action.type) {
    case "FETCH_BOOKS_REQUESTED":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_BOOKS_SUCCESS":
      const currentlyReading = payload.filter(
        data => data.category === "currentlyReading"
      );
      const wantToRead = payload.filter(data => data.category === "wantToRead");
      const read = payload.filter(data => data.category === "read");
      return {
        ...state,
        books: payload,
        currentlyReading: currentlyReading,
        wantToRead: wantToRead,
        read: read,
        isFetching: false
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default todos;
