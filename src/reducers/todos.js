const initialState = {

}

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
  case type:
    return { ...state, ...payload }
  default:
    return state
  }
}

export default todos
