const todos = (state = { books: [] }, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "FETCH_BOOKS_REQUESTED":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_BOOKS_SUCCESS":
      let data = [];

      // if(data.constructor === Array) {
      //   data = payload
      //   data.forEach((element, index) => {
      //     element.index= index
      //   });
      // } else {
      //   Object.entries(payload).forEach(([element, index]) => {
      //     let temp = {
      //       index: index,
      //       ...element
      //     }
      //     data.push(temp)
      //  })
      //   }
      for (property in payload) {
        data.push({ index: property, ...payload[property] });
      }

      const currentlyReading = data.filter(
        data => data.category === "currentlyReading"
      );
      const wantToRead = data.filter(data => data.category === "wantToRead");
      const read = data.filter(data => data.category === "read");
      return {
        ...state,
        books: data,
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
    case "UPDATE_BOOKS_REQUESTED":
      return {
        ...state,
        isUpdating: true,
        success: false
      };
    case "UPDATE_BOOKS_SUCCESS":
      return {
        ...state,
        isUpdating: false,
        success: true
      };
    case "UPDATE_BOOKS_FAILURE":
      return {
        ...state,
        isUpdating: false,
        success: false
      };
    case "ADD_BOOKS_REQUESTED":
      return {
        ...state,
        isAdding: true
      };
    case "ADD_BOOKS_SUCCESS":
      return {
        ...state,
        isAdding: false
      };
    case "ADD_BOOKS_FAILURE":
      return {
        ...state,
        isAdding: false
      };

    default:
      return state;
  }
};

export default todos;
