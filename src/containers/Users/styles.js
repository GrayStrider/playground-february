import styled from 'styled-components';
import { DefaultWrapper } from '../../styles';

const UserWrapper = styled(DefaultWrapper)`

`

const FormWrapper = styled.form`
    & label {
        display: block;
        
        & input[type='checkbox'] {
            float: right;
        }
    }
`

export {
  UserWrapper,
  FormWrapper
}
