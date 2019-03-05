const notifications = (state = [], action) => {
  switch (action.type) {
    case "ADD":
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
