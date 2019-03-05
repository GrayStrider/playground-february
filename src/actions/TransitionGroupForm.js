export const addNotification = text => ({
  type: "ADD",
  text
});

export const removeNotification = index => ({
  type: "REMOVE",
  index
});
