import React from "react";
import { bindActionCreators } from 'redux';
import { addNotification } from '../../actions/TransitionGroupForm';
import { connect } from 'react-redux';

const AddNotification = ({ addNotification }) => {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.value.trim()) {
      input.value = "";
      addNotification("empty value!");
      return
    }

    addNotification(input.value);
    input.value = "";
  }

  return (
      <form onSubmit={handleSubmit}>
        <input ref={node => {input = node}}/>
        <button type="submit">Add Notification</button>
      </form>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addNotification }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddNotification);
