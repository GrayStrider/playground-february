import React from "react";

const AddNotification = ({ addNotification }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            input.value = "";
            addNotification("empty value!");
            return;
          }
          addNotification(input.value);
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Notification</button>
      </form>
    </div>
  );
};

export default AddNotification;
