import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeNotification } from '../../actions/TransitionGroupForm';
import Notifications from '../../components/TransitionGroupForm/notifications';

const mapStateToProps = state => ({
  notifications: state.notifications
});

const mapDisaptchToProps = dispatch => {
  return bindActionCreators({ removeNotification }, dispatch);
};

export default connect(mapStateToProps, mapDisaptchToProps)(Notifications);
