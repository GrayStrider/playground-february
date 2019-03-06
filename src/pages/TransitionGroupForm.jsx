import React from "react";
import "../styles/TransitionGroupForm.scss";
import AddNotification from '../components/TransitionGroupForm/addNotification';
import Notifications from '../components/TransitionGroupForm/notifications';
import { Link } from 'react-router-dom';

const TransitionGroupForm = () => (
  <div>
    <AddNotification />
    <Notifications />
    <Link to={'/home'}>Go back</Link>
  </div>
);

export default TransitionGroupForm;
