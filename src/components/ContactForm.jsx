import React from 'react'
import { Field as RField, formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';

let ContactForm = props => {
  const {
    handleSubmit,
    nameValid
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text"
               className={nameValid ? '' : 'warning'}/>
      </>
      <button type="submit" disabled={!nameValid}>Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)


const selector = formValueSelector('contact');

ContactForm = connect(state => {
  let firstName = selector(state, 'firstName');
  const nameValid = firstName ? firstName.length >= 10 : false;
  return { nameValid };
})(ContactForm);

const Field = styled(RField)`
  &.warning {
     outline: thin red solid;
     outline-offset: 0;
  }
`

export default ContactForm
