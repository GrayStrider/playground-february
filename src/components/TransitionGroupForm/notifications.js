import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { bindActionCreators } from 'redux';
import { removeNotification } from '../../actions/TransitionGroupForm';
import { connect } from 'react-redux';

const Transition = props => (
  <CSSTransition
    {...props}
    classNames="example"
    timeout={{ enter: 500, exit: 500 }}
  />
);

class Notifications extends React.Component {
  render() {
    const notifications = this.props.notifications.map((n, i) => (
      <Transition key={n.text}>
        <div>
          <button
            className="close-notification"
            onClick={() => this.props.removeNotification(i)}
          >
            &times;
          </button>
          {n.text}
        </div>
      </Transition>
    ));
    return (
      <div className="container">
        <TransitionGroup className="notifications">
          {notifications}
        </TransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
});

const mapDisaptchToProps = dispatch => {
  return bindActionCreators({ removeNotification }, dispatch);
};

export default connect(mapStateToProps, mapDisaptchToProps)(Notifications);
