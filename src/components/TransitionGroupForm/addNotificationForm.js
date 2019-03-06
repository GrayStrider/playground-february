import React from "react";
import { connect } from 'react-redux';
import { addNotification, removeNotification } from '../../actions/TransitionGroupForm';

class AddNotificationForm extends React.Component {
  render() {
    const notifications = this.props.notifications;
    let input;

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!input.value.trim()) {
        input.value = "";
        return
      }

      let duplicateId = notifications.indexOf(notifications.find( element => element.text === input.value));

      if (duplicateId !== -1) {
        if (window.confirm('Duplicate. Would you like to delete existing instance and cancel input?')) {
          this.props.removeNotification(duplicateId);
          input.value = "";
        }
        return
      }

      this.props.addNotification(input.value);
      input.value = "";
    }

    return (
      <form onSubmit={handleSubmit}>
        <input ref={node => {input = node}}/>
        <button type="submit">Add Notification</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
});

const mapDispatchToProps = dispatch => ({
  addNotification: (text) => dispatch(addNotification(text)),
  removeNotification: (i) => dispatch(removeNotification(i))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNotificationForm);
