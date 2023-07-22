const drumReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_DISPLAY":
      return {
        ...state,
        display: action.text
      };
    default:
      return state;
  }
};

export default drumReducer;
