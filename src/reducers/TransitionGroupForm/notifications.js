const notifications = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      let isDuplicate = state.find( element => element.text === action.text)

      if (isDuplicate) {
        return state
      }

      return [
        ...state,
        {
          text: action.text
        }
      ];
    case "REMOVE":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

export default notifications;
