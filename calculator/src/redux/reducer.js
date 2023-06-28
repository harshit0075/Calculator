const reducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "INCREMENT_BY":
        return state + action.payload;
      case "DECREMENT_BY":
        return state - action.payload;
      case "MULTIPLY":
        return state * action.payload;
      case "DIVIDE":
        if (action.payload !== 0) {
          return state / action.payload;
        } else {
          return state;
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  