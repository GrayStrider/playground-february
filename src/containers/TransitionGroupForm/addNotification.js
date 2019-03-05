import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNotification } from '../../actions/TransitionGroupForm';
import AddNotification from '../../components/TransitionGroupForm/addNotification';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addNotification }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddNotification);
