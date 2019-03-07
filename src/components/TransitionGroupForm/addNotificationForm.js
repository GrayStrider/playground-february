import React from 'react';
import { connect } from 'react-redux';
import { addNotification, removeNotification } from '../../actions/TransitionGroupForm';
import ContactForm from '../ContactForm';

class AddNotificationForm extends React.Component {
  render() {
    const notifications = this.props.notifications;
    let input;

        const handleSubmit = (e) => {
      e.preventDefault();
      if (!input.value.trim()) {
        input.value = '';
        return;
      }

      //================================================================================
      // Input validation
      let duplicateId = notifications.indexOf(notifications.find(element => element.text === input.value));
      if (duplicateId !== -1) {
        if (window.confirm('Duplicate. Would you like to delete existing instance and cancel input?')) {
          this.props.removeNotification(duplicateId);
          input.value = '';
        }
        return;
      }
      //================================================================================


      this.props.addNotification(input.value);
      input.value = '';
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input ref={node => {
            input = node;
          }}/>
          <button type='submit'>Add Notification</button>
        </form>
        <ContactForm/>
        {this.props.formValues['contact'] === undefined ? ''
          : JSON.stringify(this.props.formValues['contact']['values'])}
      </>
    );
  }
}

//================================================================================
// react-redux
const mapStateToProps = state => ({
  notifications: state.notifications,
  formValues: state.form
});
const mapDispatchToProps = dispatch => ({
  addNotification: (text) => dispatch(addNotification(text)),
  removeNotification: (i) => dispatch(removeNotification(i)),
});
//================================================================================

export default connect(mapStateToProps, mapDispatchToProps)(AddNotificationForm);
