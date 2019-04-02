import { FormWrapper, UserWrapper } from './styles';
import React from 'react';

export default function Users() {
  return (
    <UserWrapper>
      <FormWrapper>
        <fieldset>
          <legend>Check the parameters</legend>
          <label>Email
            <input type='checkbox' id='email'/>
          </label>
          <label>Name
            <input type='checkbox' id='name'/>
          </label>
          <label>Age
            <input type='checkbox' id='age'/>
          </label>

        </fieldset>
      </FormWrapper>
    </UserWrapper>
  )
}
